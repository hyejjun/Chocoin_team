const request = require('request')
require('dotenv').config()

const {get_data,send_data} = require('../../db.js')

const headers = {"Content-type":"application/json"}
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const RPCPORT = process.env.RPC_PORT;
const ID_STRING = 'chocoin_exchange';
const ACCOUNT = 'mihee';
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

















// 거래소
let coin_info = (req,res) => { 
    //let query = `select * from privatetransaction where`
    let query = `select * from asset`
    get_data(req,res,query)
};


let get_orderdata = (req,res) => {
    let {price,qnt,total,type} = req.body
    let query =  `insert into ordertable (pk,userid,price,qty,ordertype) values('?','userid',"${price}","${qnt}","${type}")`
    send_data(req,res,query) 
}



module.exports = {
    coin_info,
    get_orderdata,
};