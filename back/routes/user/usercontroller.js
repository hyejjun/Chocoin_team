// 필요 경로================================
// 회원가입 창 들어옴
// 회원가입 시도
// 로그인 창 들어옴
// 로그인 시도
// mypage
// mypage 수정

const mysql = require('mysql')
const config = require('../../db_config.json')
const {get_data, send_data} = require('../../db.js')


let join_get = (req,res) => {
    res.render('회원가입창에 들어왔을때...!')

}

let join_post = (req,res) => {
    let query = ``
    send_data(req,res,query)
}

let login_get = (req,res) => {

}

let login_post = (req,res) => {

}

let mypage_get = (req,res) => {

}

let mypage_post = (req,res) => {

}

module.exports = {
    join_get,
    login_get,
    mypage_get,
    join_post,
    login_post,
    mypage_post
}