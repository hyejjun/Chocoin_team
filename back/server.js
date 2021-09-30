const express = require('express')
const app = express()
const port = process.env.PORT||3500
const {sequelize} = require('./models')
const morgan = require('morgan')
require('dotenv').config('env')
const router = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

sequelize.sync({force:true})
.then(()=>{
    console.log('db suc')
})
.catch((err)=>{
    console.log('db fail')
})

app.use(morgan('dev'))

app.get('/',router)


app.listen(port,()=>{
    console.log('server ',port)
})