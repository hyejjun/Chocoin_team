
const mysql = require('mysql');

const {get_data,send_data} = require('../../db.js')



let coin_info = (req,res) => {
    
    let query = `select * from asset`
    get_data(req,res,query)
    // pool.getConnection((err,connection)=>{
    //     if(err) throw err;
    //     connection.query(`select * from asset`,
    //         function(error,results,fields){
    //             if(error) throw error;
    //             if(results==undefined){
    //                 res.json({'msg':'db connection fail'})
    //             }else{
    //                 res.json({'mse':'db suc',results})
    //             }
    //             connection.release();
    //         });  
    // })
};


let get_orderdata = (req,res) => {
    let {price,qnt,total,type} = req.body       
    

    // pool.getConnection((err,connection)=>{
    //     if(err) throw err;
    //     connection.query(`insert into ordertable (pk,userid,price,qty,ordertype) values(''....)`,
    //     function(error,results,fields){
    //         if(error) throw error;
    //         if(results==undefined){
    //             res.json({'msg':'db connection fail'})
    //         }else{
    //             res.json({'msg':'db connection success'})
    //         }
    //         connection.release();

    //     })
    // })
}



module.exports = {
    coin_info,
    get_orderdata,
};