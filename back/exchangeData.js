const mysql = require('mysql');
require('dotenv').config();
const config = require('./db_config.json');
const pool = mysql.createPool(config);
const messageData = require('./messageData');
const defaultRet = {
    buyList: { success: null, list: null },
    sellList: { success: null, list: null },
    txList: { success: null, list: null },
    success: true,
    chartdata: [],
}

// 가격 상위 매수 목록 5개를 뿌려줌. 
// 그런데 매수 목록이 없다면? 없다고 알려줘야함
// length ==0 이면 매수물량이 없다고 알려줘야함.
// 이건 프론트에서 처리하자. 
// success가 true인데  list값이 없으면 매수물량이 없습니다. 
// success가 flase면..  error 메세지로 알려주기. 
// 쿼리문 에러는 쿼리를 잘 짰으면 발생할 이유가 없음. 
// DB 조회시 오류가 발생했다면 그것도 알려줘야함. 목록이 없는 게 아니라. 오류라는

async function getBuyList() {
    let ret = { ...defaultRet };
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const buyListSql = `
            SELECT price,pty
            FROM ordertype 
            WHERE ordertype="BUY
            GROUP BY price
            ORDER BY price DESC
            LIMIT 5;
            `
            const temp = await connection.execute(buyListSql, []);
            ret.success = true;
            ret.buyList.success = true;
            ret.buyList.list = temp[0];
        } catch (error) {
            console.log('Query Error Buy1');
            console.log(error)
            ret.buyList = messageData.errorMessage(error)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        ret.buyList = messageData.errorMessage(error);
    } finally {
        connection.release();
    }
    return ret;
}

async function getSellList() {
    let ret = { ...defaultRet };
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sellListSql = `
            SELECT price,qty 
            FROM order_list 
            WHERE orderstype="SELL"
            GROUP BY price
            ORDER BY price ASC
            LIMIT 5;
            `
            const temp = await connection.execute(sellListSql, []);
            ret.success = true;
            ret.sellList.success = true;
            ret.sellList.list = temp[0].reverse();
        } catch (error) {
            console.log('Query Error SELL1');
            console.log(error)
            ret.sellList = messageData.errorMessage(error)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        ret.sellList = messageData.errorMessage(error);
    } finally {
        connection.release();
    }
    return ret;
}

async function getTransactionList(n) {
    console.log('getTransactionList')
    // let ret = { ...defaultRet };
    // let connection;
    // try {
    //     connection = await pool.getConnection(async conn => conn);
    //     try {
    //         const transactionListSql = `
    //         SELECT  *
    //         FROM transaction
    //         ORDER BY id DESC
    //         LIMIT ${n};
    //         `
    //         const temp = await connection.execute(transactionListSql, []);
    //         temp[0].forEach((v, i) => {
    //             temp[0][i].tx_date = temp[0][i].tx_date.toLocaleString();
    //         })
    //         ret.success = true;
    //         ret.txList.success = true;
    //         ret.txList.list = temp[0];
    //     } catch (error) {
    //         console.log('Query Error');
    //         console.log(error)
    //         ret.txList = messageData.errorMessage(error)
    //     }
    // } catch (error) {
    //     console.log('DB Error')
    //     console.log(error)
    //     ret.txList = messageData.errorMessage(error);
    // } finally {
    //     connection.release();
    // }
    // return ret;
}

async function getResult(n) {  //return array
    let ret = { ...defaultRet };
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const buyListSql = ` //매수
                SELECT price,qty
                FROM ordertable
                WHERE ordertype="BUY"
                GROUP BY price
                ORDER BY price DESC
                LIMIT 5
            `
            const buytemp = await connection.execute(buyListSql, []);
            ret.buyList.success = true;
            ret.buyList.list = buytemp[0];

            const sellListSql = `
                SELECT price,qty
                FROM ordertable
                WHERE ordertype="SELL"
                GROUP BY price
                ORDER BY price DESC
                LIMIT 5
            `

            const selltemp = await connection.execute(sellListSql, []);
            ret.sellList.success = true;
            ret.sellList.list = selltemp[0].reverse();

            // await makeTxTemp(connection);
            // ret.chartdata = await oneMinuteInterval(connection);

            //   let transactionListSql = `
            //     SELECT  *
            //     FROM transaction
            //     ORDER BY id DESC
            //     `
            //   if(n==0) transactionListSql+=';'   //전체 트랜잭션 조회
            //   else transactionListSql+=` LIMIT ${n};` //최근 n개 트랜잭션 조회

            //   const txtemp = await connection.execute(transactionListSql, []);
            //   txtemp[0].forEach((v, i) => {
            //     txtemp[0][i].tx_date = txtemp[0][i].tx_date.toLocaleString();
            //   })
            //   ret.txList.success = true;
            //   ret.txList.list = txtemp[0];

        } catch (error) {
            console.log('Query Error getResult');
            console.log(error)
            ret = messageData.errorMessage(error)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        ret = messageData.errorMessage(error);
    } finally {
        connection.release();
    }
    return ret;
}


async function clacMyAsset(conn, user_idx) {
    const assetSql = `SELECT SUM(input)-SUM(output) as asset from asset WHERE user_idx = ?`
    const assetParams = [user_idx]
    const [[myAsset]] = await conn.execute(assetSql, assetParams)
    return myAsset.asset;
}


// async function oneMinuteInterval(conn) {
//     console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx')

//     const allTxSql = `
//     SELECT price,ordertime 
//     FROM transaction 
//     ORDER BY ordertime ;
//     `

//     const [temp] = await conn.execute(allTxSql, []);
//     if (temp.length == 0) return [];

//     let result = [{ time: temp[0].tx_date, low: temp[0].price, start: temp[0].price, end: temp[0].price, high: temp[0].price }];
//     let cnt = 1;

//     console.log(temp)

//     while (cnt < temp.length) {
//         let preData = result[result.length - 1];
//         const now = new Date(temp[cnt].tx_date);
//         preTime = new Date(preData.time)
//         if (compareTime(preTime, now) == true) {
//             preData.end = temp[cnt].price;
//             if (preData.high == null) {
//                 preData.high = temp[cnt].price;
//             }
//             if (preData.low == null) {
//                 preData.low = temp[cnt].price;
//             }
//             if (preData.high < temp[cnt].price) {
//                 preData.low = temp[cnt].price;
//             }
//             if (preData.low > temp[cnt].price) {
//                 preData.low = temp[cnt].price;
//             }
//             cnt++;
//         } else {
//             const newDate = new Date(preTime).setMinutes(preTime.getMinutes() + 1);
//             result.push({ time: new Date(newDate), low: null, start: preData.end, end: preData.end, high: null })
//         }
//     }
//     console.log(result)
//     const arrResult = result.map(v => Object.entries(v).map(x => x[1]));
//     return arrResult;
// }

function compareTime(pre, now) {
    const preDate = new Date(pre);
    const nowDate = new Date(now);
    // console.log('==='+preDate+'     '+nowDate+'===')

    if (preDate.getFullYear() == nowDate.getFullYear()
        && preDate.getMonth() == nowDate.getMonth()
        && preDate.getDate() == nowDate.getDate()
        && preDate.getHours() == nowDate.getHours()
        && preDate.getMinutes() == nowDate.getMinutes()
    ) {
        return true;
    }
    return false;
}

// async function makeTxTemp(conn) {
//     const sql = `INSERT INTO transaction (sell_orderid,sell_amount,sell_commission,buy_orderid,buy_amount,buy_commission,price,tx_date) VALUES(1,100,100,2,200,100,?,?)`
//     let now = new Date();
//     for (let i = 0; i < 100; i++) {
//         let random = Math.random() * 1000;
//         let newDate = (new Date().setMinutes(now.getMinutes() - 50 + i));
//         let finalDate = new Date(newDate);
//         let params = [random, finalDate];

//         const [temp] = await conn.execute(sql, params);
//     }
// }

module.exports = {
    getResult,
    getBuyList,
    getSellList,
    getTransactionList,
}