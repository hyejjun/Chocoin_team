const mysql = require('mysql');

const config = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'chocoin_db'
}

const pool = mysql.createPool(config)




// let coin_info = () => {
//     let {} = req.body
//     pool.getConnection((err,connection)=>{
//         if(err) throw err;
//         //connection.query('select ')
//     })

// };

let get_orderdata = () => {
    let {가격,수량} = req.body
    pool.getConnecion((err,connection)=>{
        if(err) throw err;
        connection.query(`insert into ordertable (pk,userid,price,qty,ordertype) values('','')`);

        (error,result,fields)=>{
            connection.release();
            if(error) throw error;
        }
    })
}

module.exports = {
    coin_info
};