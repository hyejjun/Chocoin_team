const request = require('request')
require('dotenv').config()
const mysql = require('mysql');
const {get_data,send_data} = require('../../db.js');

const headers = {"Content-type":"application/json"}
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const RPCPORT = process.env.RPC_PORT;
const ID_STRING = 'chocoin_exchange';
const ACCOUNT = 'chocoin';
const url = `http://${USER}:${PASS}@127.0.0.1:${RPCPORT}`;
// js파일과 rpc연결을 위한 url

function createbody(method,params=[]){
    let obj = {jsonrpc:"1.0", id:ID_STRING,method,params};
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












let coin_info = (req,res) => { 
    //let query = `select * from transactions order by contracttime desc`;
    let query = `select * from ordertable where active=1`
    get_data(req,res,query)
}

let tradingview = (req,res)=>{
    let query = `select price,ordertype,sum(qty) as sum,ordertime from ordertable where active=0 group by price,ordertype`
    get_data(req,res,query)
}

let get_orderdata = (req,res) => {
    let {price,qnt,type} = req.body 
    console.log(req.body);
    let query =  `insert into ordertable (pk,userid,price,qty,ordertype,active,coinname) values(10,'userid',${price},${qnt},"${type}",true,"chocoin")`
    // let query =  `insert into ordertable (pk,userid,price,qty,ordertype) values(5,'userid',1,1,1)`
    send_data(req,res,query) 
}


let trade = (req,res)=>{
    // let query = `select price,qty,ordertype from ordertable where active=1 order by ordertime desc`
    // 여기서 거래 하기 . price 와 qty 일치시.. 거래성사 후 active 1로 바꾸고 transaction 테이블에 올리기
    
}


module.exports = {
    coin_info,
    get_orderdata,
    tradingview
};