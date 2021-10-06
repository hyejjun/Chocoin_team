const mysql = require('mysql')
const config = require('./db_config.json')
const pool =  mysql.createPool(config)

//데몬연결관련
//------------------------------------------------------------------------
const headers = {"Content-type":"application/json"}
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const RPCPORT = process.env.RPC_PORT;
const ID_STRING = 'chocoin_exchange';
const ACCOUNT = 'chocoin';
const url = `http://${USER}:${PASS}@127.0.0.1:${RPCPORT}`;
// js파일과 rpc연결을 위한 url

function createbody(method,params=[]){
    let obj = {jsonrpc:"1.0", id:ID_STRING,method,params};
    return JSON.stringify(obj);
}
//------------------------------------------------------------------------


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
                res.json({'msg':'suc'})
            }
            connection.release();
        })
    })
}

let trade = async (req,type,qnt,price)=>{
    //let trade_query = `select price,ordertype,sum(qty) as sum,ordertime from ordertable where (active=0 AND ordertype='SELL') group by price`
    //let trade_result = ~query(trader_query,[0,SELL])
    //let trade_query = `select price,ordertype,sum(qty) as sum,ordertime from ordertable where (active=0 AND ordertype=${type}) group by price,ordertype`
    let trade_query = `select userid,price,qty,ordertime from ordertable where (active=1 and ordertype="SELL" AND price>=${price}) order by price,ordertime asc;`
    
        pool.getConnection((err,connection)=>{
            if(err) throw err;
                connection.query(trade_query,function(error,results,fields){
                    console.log(results)
                    for(i=0;i<=results.length-1;i++){
                        if(error) throw(error);
                        if(results==undefined){
                            console.log('failllllll')
                        }else{
                            //qnt = qnt - results[i].qty
                            //let date_order_Query = `update from order`
                            //connection.query()
                            
                            qnt = qnt - results[i].qty;
                            if(qnt>=0){
                                console.log(qnt,'qnt는 사는 중')                                               
                                
                            }else if(qnt<0){
                                console.log(qnt,'qnttttttttttttttttt')
                                //console.log()
                            }
                            
                            
                      
                            //console.log(results,'resultssssssssssssssss')
                        }
                        
                    }
                })
        })
}

// 매도 매수 페이지 들어온 경우---------------------------------------------
let coin_info = (req,res) => {
    let query = `select * from transactions order by contracttime desc`;
   get_data(req,res,query)
}


// 매도 매수 클릭 한 경우------------------------------------------
let buyClick = (req,res) => {
   let {price,qnt,total,type} = req.body
   if(type=='매수'){
       let query = ``
   }

}
// 질문?=================================================
// connection pool을 이용한 경우에도 async await를 사용해야 하는가






module.exports = {
    get_data,
    send_data,
    trade
}