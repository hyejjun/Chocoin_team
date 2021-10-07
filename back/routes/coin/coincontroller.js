const request = require('request')
require('dotenv').config()
const mysql = require('mysql');
const { get_data, send_data } = require('../../db.js');
const config = require('../../db_config.json')
const pool = mysql.createPool(config)
const jwtId = require('../../jwtId');
const exchangeData = require('../../exchangeData');
const ws = require('../../socket2');

const headers = { "Content-type": "application/json" }
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const RPCPORT = process.env.RPC_PORT;
const ID_STRING = 'chocoin_exchange';
const ACCOUNT = 'chocoin';
const url = `http://${USER}:${PASS}@127.0.0.1:${RPCPORT}`;
// js파일과 rpc연결을 위한 url

function createbody(method, params = []) {
    let obj = { jsonrpc: "1.0", id: ID_STRING, method, params };
    return JSON.stringify(obj);
}

// app.get('/getblockcount',(req,res,next)=>{
//     let body = createbody('getblockcount',[]);
//     let options = {url,method:"POST",headers,body};
//     console.log(options)
//     const callback = (err,response,data) => {
//         if( err==null && response.statusCode == 200 ){
//             const body = JSON.parse(data);
//             res.json(body);
//         }else{
//             console.log(err,'왜 error?');
//             next();
//         }
//     }
//     console.log('request')
//     request(options,callback)
// })
// 브라우저에 localhost:3002/getblockcount












let coin_info = async (req, res) => {
    //let query = `select * from transactions order by contracttime desc`;
    let query = `select * from ordertable where active=1`;
    await get_data(req, res, query);
}

let tradingview = async (req, res) => {
    let query = `select price,ordertype,sum(qty) as sum,ordertime from ordertable where active=1 group by price,ordertype`
    await get_data(req, res, query)
}

// let get_orderdata = async(req,res)=>{
//     let { price, qnt, type, userid } = req.body;
// }

let get_orderdata = async (req, res) => {
    let { price, qnt, type, userid } = req.body;

    // userid를 가지고 useridx 값 구하기
    let useridxSql = `select id from usertable where userid="${userid}"`;
    let [{ id: useridx }] = await query(useridxSql);

    // 내가 가지고 있는 자산 확인 : 내 자산 = myAsset
    let assetSql = `select ifnull(sum(input)-sum(output),0) as asset from assetrecord where useridx="${useridx}"`;
    let [{ asset: myAsset }] = await query(assetSql);

    // 현재 로그인한 계정에 채결되지 않은 주문내역이 있는지 : 있다면 주문의 가격이 총 얼만지
    let preOrderSql = `select price from ordertable where useridx="${useridx}" and active=0`;
    let preOrder = await query(preOrderSql);
    let result = 0;
    let preSumArr = preOrder.map(v => {
        result += v.price
        return result
    });
    const preSum = preSumArr.length > 0 ? preSumArr[preSumArr.length - 1] : 0;

    // 채결되지 않은 주문내역만큼의 자산은 사용할 수 없음.
    const availableAsset = myAsset - preSum;
    // 마이너스로 뜰때는 어떻게 해야 하는지 처리 필요함

    //======================================================================================
    // if((qnt*price) > availableAsset){ ===========================================
    if (availableAsset === null) {
        res.json({ success: "fail", msg: "자산이 충분하지 않음" });
    } else {

        // 거래 아이디 인가..?
        let insertOrderTable = `INSERT INTO ordertable (pk, useridx, qty, price, ordertype, active, coinname) VALUES (1,${useridx},${qnt},${price},"${type}",0,"chocoin");`
        let { insertId: orderResult } = await query(insertOrderTable);

        // 거래가능한 주문 목록 : 가격 - 시간 - 물량 순으로
        const availableOrderSql = `SELECT * FROM ordertable WHERE useridx NOT IN(${useridx}) AND price<=${price} AND active=0 ORDER BY price ASC, ordertime ASC, qty DESC;`;
        let availableOrder = await query(availableOrderSql);

        if (availableOrder.length == 0) {

            // 주문완료 == 주문완료 할때까지는 다른 주문이 들어오지 않게 테이블을 닫아놓는다.
            const UNLOCKSQL = `UNLOCK TABLES;`;
            await query(UNLOCKSQL);
            ws.broadcast(await exchangeData.getBuyList());
            res.json({ msg: '거래완료' });

        } else {

            let insertSQL = '';
            let cnt = 0;

            for (let i = 0; i < availableOrder.length; i++) {
                const order = availableOrder[i];
                // insertSQL += `
                //   INSERT INTO asset (user_idx,input,output) VALUES(${order.user_idx},${calcAsset},0);
                //   INSERT INTO asset (user_idx,input,output) VALUES(${user_idx},0,${calcAsset});
                //   INSERT INTO transaction (sell_orderid,sell_amount,sell_commission,buy_orderid,buy_amount,buy_commission,price) 
                //   VALUES(${order.id},${order.leftover},${calcCoin},${nowOrderIndex},${qty},${calcCoin},${order.price});\n`
                // qty -= order.leftover;
                cnt++;
                // if (qty <= 0) {
                //     break;
                // }
            }
            ws.commission(cnt);
            res.json({result:"commission"});
        }
        // res.json({ success: "success", results: "ddd" });
    };
};

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) reject(error);
            connection.query(sql, (error, results, fields) => {
                if (error) reject(error)
                if (results === undefined) reject('error');
                resolve(results);
                connection.release();
            })
        })
    })
}

// 매수 하는 쪽
let get_orderdata2 = (req, res) => {
    let { price, qnt, type } = req.body
    console.log(qnt);

    let insetdata_query = `insert into ordertable (useridx,pk,price,qty,ordertype,active,coinname) values(1,1,${price},${qnt},"${type}",true,"chocoin")`
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(insetdata_query, function (error, results, fields) {
            if (error) throw error;
            if (results == undefined) {
                res.json({ 'msg': 'fail' })
            } else {
                res.json({ 'msg': 'suc' })
            }
            connection.release();
        })
    })

    /* 여기서 부터 거래 */
    let get_orderlist = `select pk,price,qty,ordertime from ordertable where active=1 and ordertype="SELL" and price=${price} order by price,ordertime asc`
    if (type === "SELL") {
        get_orderlist = `select pk,price,qty,ordertime from ordertable where active=1 and ordertype="BUY" and price=${price} order by price desc,ordertime asc`
    }

    // pool.getConnection((err, connection) => {
    //     if (err) throw err;
    //     connection.query(get_orderlist, function (error, results, fields) {
    //         if (error) throw error;
    //         connection.release();

    //         const orderlist = [...results];
    //         console.log("ddddddddddddd", orderlist);

    //         let i = 0;
    //         while (true) {
    //             if (orderlist.length == 0) break;
    //             if ( orderlist.length == i) {
    //                 console.log(' 검사 끝 ');
    //                 break;
    //             }
    //             console.log("첫번째 i====", i);
    //             if (orderlist[i].qty >= qnt) {
    //                 let left = orderlist[i].qty - qnt

    //                 let qty_update = `update ordertable set qty=${left} where pk=${orderlist[i].pk}`
    //                 if (left == 0) {
    //                     qty_update = `update ordertable set qty=${left}, active=0 where pk=${orderlist[i].pk}`
    //                 }

    //                 pool.getConnection((err, connection) => {
    //                     if (err) throw err;
    //                     connection.query(qty_update, function (error, results, fields) {
    //                         if (error) throw error;
    //                         connection.release();
    //                     })
    //                 })

    //                 // 여기서 매수.매도 신청자의 지갑주소에 개수를 0 으로, active=0 으로 업뎃해줘야함 - 매수 매도 신청시 pk(지갑 주소)값 보내줘야함
    //                 // let qnt_update = `update ordertable set qty=0, active=0 where pk=${pk}`
    //                 // pool.getConnection((err, connection) => {
    //                 //     if (err) throw err;
    //                 //     connection.query(me_update, function (error, results, fields) {
    //                 //         if (error) throw error;
    //                 //         connection.release();
    //                 //     })
    //                 // })

    //                 // 원화 = 개수 * price 해서 원화를 sell 한곳에는 플러스 하고 buy 한 곳에는 마이너스 

    //                 break;

    //             } else if (orderlist[i].qty < qnt) {
    //                 let qty_update = `update ordertable set qty=0, active=0 where pk=${orderlist[i].pk}`
    //                 pool.getConnection((err, connection) => {
    //                     if (err) throw err;
    //                     connection.query(qty_update, function (error, results, fields) {
    //                         if (error) throw error;
    //                         connection.release();
    //                     })
    //                 })
    //                 qnt = qnt - orderlist[i].qty;
    //                 i++;
    //                 console.log("두번째 i====", i);
    //             } 


    //         }
    //     })
    // })
}


let trade = (req, res) => {
    // let query = `select price,qty,ordertype from ordertable where active=1 order by ordertime desc`
    // 여기서 거래 하기 . price 와 qty 일치시.. 거래성사 후 active 1로 바꾸고 transaction 테이블에 올리기
    let query = `select price,ordertype,sum(qty) as sum,ordertime from ordertable where active=0 group by price,ordertype`

}


module.exports = {
    coin_info,
    get_orderdata,
    tradingview,
};