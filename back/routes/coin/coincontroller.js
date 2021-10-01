const mysql = require('mysql');

const config = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'chocoin_db'
}

const pool = mysql.createPool(config)

let coin_info = (req,res) => {
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(`select * from asset`,function(error,results,fields){
            if(error) throw error;
            if(results==undefined){
                res.json({'msg':'db connection fail'})
            }else{
                res.json({'mse':'db suc',results})
            }
            connection.release();
        });  
    })
};

let get_orderdata = () => {
    let {가격,수량} = req.body
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(`insert into ordertable (pk,userid,price,qty,ordertype) values(''....)`,
        function(error,results,fields){
            if(error) throw error;
            if(results==undefined){
                res.json({'msg':'db connection fail'})
            }else{
                res.json({'msg':'db connection success'})
            }
            connection.release();

        })
    })
}



module.exports = {
    coin_info,
    get_orderdata,
    test
};