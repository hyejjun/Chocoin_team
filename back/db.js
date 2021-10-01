const mysql = require('mysql')
const config = require('./db_config.json')
const pool = mysql.createPool(config)

function get_data(req,res,querysyn){
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(querysyn,function(error,results,fields){
            if(error) throw error;
            if(results==undefined){
                res.json({'msg':'db connection fail'})
            }else{
                res.json({'msg':'db suc',results})
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
                res.json({'msg':'db connection fail'})
            }else{
                res.json({'msg':'db connection success'})
            }
            connection.release();
        })
    })
}

module.exports = {
    get_data,
    send_data
}