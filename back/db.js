const mysql = require('mysql')
const config = require('./db_config.json')
const pool =  mysql.createPool(config)

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
                res.json({'msg':'suc',results})
            }
            connection.release();
        })
    })
}

module.exports = {
    get_data,
    send_data
}