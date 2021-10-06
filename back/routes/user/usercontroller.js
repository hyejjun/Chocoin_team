const mysql = require('mysql')
require('dotenv').config();
const config = require('../../db_config.json');
const { get_data, send_data } = require('../../db.js');
const pool = mysql.createPool(config);
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
    let { userid, userpw } = req.body;
    let hashedpw = createHash(userpw);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        let result = {};
        connection.query(`select * from usertable where userid = "${userid}" and userpw = "${hashedpw}"`, (error, results, fileds) => {
            if (error) throw error;
            if (results.length === 0) {
                result = {
                    result: 'Fail',
                    msg: '로그인 실패'
                }
                console.log(result.msg);
                let test = { result };
                res.json(test);
            } else {
                let ctoken = token(userpw, userid);
                result = {
                    result: 'OK',
                    msg: '로그인 성공',
                    userid,
                }
                let test = { results, ctoken, result };
                res.cookie('AccessToken', ctoken, { httpOnly: true, secure: true });
                res.json(test);
            }
            connection.release();
        })
    })
};

let logout = (req, res) => {

    // res.cookie('AccessToken', '', { maxAge: 0 });
    // res.clearCookie('AccessToken').send(req.cookies.name);
    // res.setHeader('Set-Cookie', `token2=; path=/; expires=-1`);
    // document.cookie = "AccessToken" + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    res.send('logout');
}

let mypage_get = (req, res) => {
    let { userid } = req.body
    // let query = `select * from assetrecord where userid = '${userid}'`
    let query = `select * from assetrecord where pk=1`
    // let query = `select * from assetrecord where userid = 'web11'`
    get_data(req, res, query)
}

let mypage_get2 = (req, res) => {
    let { userid } = req.body
    let query = `select * from cointable where holder = '${userid}'`
    // let query = `select * from assetrecord where userid = 'web11'`
    get_data(req, res, query)
}

// let mypage_post = (req, res) => {
//     let{input,output,totalasset} = req.body
//     console.log(req.body)
//     let query = `insert into assetrecord(pk,userid,input,output,totalasset) values(10,'userid',${input},${output},${totalasset})`
//     send_data(req, res, query)
// }

module.exports = {
    join_get,
    login_get,
    mypage_get,
    join_post,
    login_post,
    mypage_get2,
    id_check,
    logout
}