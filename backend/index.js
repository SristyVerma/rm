const express=require('express')
const app=express()
const errorMiddleware=require('./middleware/error')
app.use(express.json())


//ROUTE IMPORTS
const product=require("./routes/productRoute")
app.use('/',product)
//MIDDLEWARE
app.use(errorMiddleware)
module.exports=app