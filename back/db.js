const mysql = require('mysql')
const config = require('./db_config.json')
const pool =  mysql.createPool(config)

//데몬연결관련
//------------------------------------------------------------------------
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
//------------------------------------------------------------------------


function get_data(req,res,querysyn){
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(querysyn,function(error,results,fields){
            if(error) throw error;
            if(results==undefined){
                res.json({'msg':'fail'})
            }else{
                res.json({'msg':'suc',results})
            }
            connection.release();
        })
    })
}

function send_data(req,res,querysyn){
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(querysyn,function(error,results,fields){
            if(error) throw error;
            if(results==undefined){
                res.json({'msg':'fail'})
            }else{
                console.log(results)
                res.json({'msg':'suc'})
            }
            connection.release();
        })
    })
}

// 매도 매수 페이지 들어온 경우---------------------------------------------
let coin_info = (req,res) => {
    let query = `select * from transactions order by contracttime desc`;
   get_data(req,res,query)
}


// 매도 매수 클릭 한 경우------------------------------------------
let buyClick = (req,res) => {
   let {price,qnt,total,type} = req.body
   if(type=='매수'){
       let query = ``
   }

}
// 질문?=================================================
// connection pool을 이용한 경우에도 async await를 사용해야 하는가






module.exports = {
    get_data,
    send_data
}