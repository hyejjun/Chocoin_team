const mysql = require('mysql')
const config = require('./db_config.json')

let pool = mysql.createPool(config)

function getConnection(query){
    pool.getConnection(function(err,conn){
        if(!err){
            
        }
    })
}
console.log(pool)

