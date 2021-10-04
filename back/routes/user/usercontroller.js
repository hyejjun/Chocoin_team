// 필요 경로================================
// 회원가입 창 들어옴
// 회원가입 시도
// 로그인 창 들어옴
// 로그인 시도
// mypage
// mypage 수정

const mysql = require('mysql')
require('dotenv').config()
const config = require('../../db_config.json')
const {get_data, send_data} = require('../../db.js')
const pool = mysql.createPool(config)

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



let join_get = (req,res) => {
    res.send('회원가입창에 들어왔을때...!')
}

let join_post = (req,res) => {
    let {userid,userpw,usertel} = req.body.data
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(`select * from usertable`,function(error,results,fileds){
            if(error) throw error;
            for(i=0;i<results.length;i++){
                if(results[i].userid!=='asdf'){
                    console.log('회원가입가능')
                    connection.query(`insert into usertable (userid,userpw,usertel) values('id','pw','tel')`);
                }else{
                    res.json({'msg':'suc',})
                }
            }
            
            connection.release();
        })
    })
    res.send('나오나?')
}

let login_get = (req,res) => {
    res.rendser('로그인 창에 들어왔을 때')

}

let login_post = (req,res) => {
    let query = `insert into usertable (userid,userpw) values('id','pw')`
    send_data(req,res,query)
}

let mypage_get = (req,res) => {
    let query = `select ~`
    get_data(req,res,data)

}

let mypage_post = (req,res) => {
    let query = `insert into user () values()`
    send_data(req,res,query)
}

module.exports = {
    join_get,
    login_get,
    mypage_get,
    join_post,
    login_post,
    mypage_post
}