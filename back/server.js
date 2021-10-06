const express = require('express');
const app = express();
const port = process.env.PORT||3500;
const morgan = require('morgan');
require('dotenv').config('env');
const router = require('./routes');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const cors = require('cors');
const config = require('./db_config.json');
const socket = require('./socket');

socket.wsInit();

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:'VEBENEKEOWDK',
    cookie:{
        httpOnly:true,
        secure:false,
    },
    name:'token',
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({
	origin: true, 
    credentials: true,  
}));

app.use(morgan('dev'));

app.use('/',router);

app.listen(port,()=>{
    console.log('server ',port)
});