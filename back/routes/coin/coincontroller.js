
const mysql = require('mysql');

const {get_data,send_data} = require('../../db.js')



let coin_info = (req,res) => { 
    let query = `select * from asset`
    get_data(req,res,query)
};


let get_orderdata = (req,res) => {
    let {price,qnt,total,type} = req.body
    let query =  `insert into ordertable (pk,userid,price,qty,ordertype) values('pk','userid',${price},${qnt},${type})`
    send_data(req,res,query) 
}



module.exports = {
    coin_info,
    get_orderdata,
};