const express = require('express')
const app = express()
const port = process.env.PORT||3500
const {sequelize} = require('./models')
const morgan = require('morgan')
require('dotenv').config('env')



sequelize.sync({force:true})
.then(()=>{
    console.log('db suc')
})
.catch((err)=>{
    console.log('db fail')
})

app.use(morgan('dev'))


app.listen(port,()=>{
    console.log('server ',port)
})