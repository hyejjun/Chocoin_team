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
const { get_data, send_data } = require('../../db.js')
const pool = mysql.createPool(config)
const createHash = require('../../chash');
const token = require('../../jwt');

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

let join_get = (req, res) => {
    res.send('회원가입창에 들어왔을때...!')
}

let join_post = (req, res) => {
    let { userid, userpw } = req.body;
    let hashedpw = createHash(userpw);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`insert into usertable (userid,userpw,usertel) values('${userid}','${hashedpw}','3')`);
    })
    res.send('join');
}

<<<<<<< HEAD
=======
let login_get = (req, res) => {
    res.render('로그인 창에 들어왔을 때')

}

let login_post = (req, res) => {
    let query = `insert into usertable (userid,userpw) values('id','pw')`
    send_data(req, res, query)
}

let mypage_get = (req, res) => {
    let query = `select * from assetrecord where userid = ${userid}`
    get_data(req, res, query)

}

let mypage_post = (req, res) => {
    let{input,output,totalasset} = req.body
    console.log(req.body)
    let query = `insert into assetrecord(pk,userid,input,output,totalasset) values(10,'userid',${input},${output},${totalasset})`
    send_data(req, res, query)
}

>>>>>>> eb0e94519f343a2008771b706f43ca30654c6379
let id_check = (req, res) => {
    let userid = req.body.data;
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`select * from usertable where userid = "${userid}"`, (error, results, fileds) => {
            if (error) throw error;
            if (results.length === 0) {
                check = { Id_check: false }
                res.json(check)
            } else {
                check = { Id_check: true }
                res.json(check)
            }
            connection.release();
        })
    })
}

let login_get = (req, res) => {
    res.render('로그인 창에 들어왔을 때')
}

let login_post = (req, res) => {
    let {userid,userpw} = req.body;
    let hashedpw = createHash(userpw);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`select * from usertable where userid = "${userid}" and userpw = "${hashedpw}"`, (error, results, fileds) => {
            if (error) throw error;
            if (results.length === 0) {
                result = {
                    result:'Fail',
                    msg:'로그인 실패'
                }
                console.log(result.msg);
                let test = {result}
                res.json(test);
            } else {
                let ctoken = token(userpw,userid);
                result = {
                    result:'LoginSuc',
                    msg:'로그인 성공'
                }
                let test = {results, ctoken, result};
                res.json(test);
                console.log(result.msg);
            }
            connection.release();
        })
    })
}

let mypage_get = (req, res) => {
    let query = `select ~`
    get_data(req, res, data)

}

let mypage_post = (req, res) => {
    let query = `insert into user () values()`
    send_data(req, res, query)
}

module.exports = {
    join_get,
    login_get,
    mypage_get,
    join_post,
    login_post,
    mypage_post,
    id_check
}