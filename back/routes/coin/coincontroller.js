const request = require('request')
require('dotenv').config()
const mysql = require('mysql');
const { get_data, send_data } = require('../../db.js');
const config = require('../../db_config.json')
const pool = mysql.createPool(config)

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












let coin_info = (req, res) => {
    //let query = `select * from transactions order by contracttime desc`;
    let query = `select * from ordertable where active=1`
    get_data(req, res, query)
}

let tradingview = async (req, res) => {
    let query = `select price,ordertype,sum(qty) as sum,ordertime from ordertable where active=1 group by price,ordertype`
    await get_data(req, res, query)
}

let get_orderdata = (req, res) => {
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
    tradingview
};