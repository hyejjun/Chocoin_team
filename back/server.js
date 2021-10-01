const express = require('express');
const app = express();
const port = process.env.PORT||3500;
//const {sequelize} = require('./models')
const morgan = require('morgan');
require('dotenv').config('env');
const router = require('./routes');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const config = require('./db_config.json');

let pool = mysql.createPool(config);


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({
	origin: true, 
    credentials: true,  
}))


// sequelize.sync({force:true})
// .then(()=>{
//     console.log('db suc')
// })
// .catch((err)=>{
//     console.log('db fail')
// })

app.use(morgan('dev'));

app.use('/',router);


app.listen(port,()=>{
    console.log('server ',port)
});