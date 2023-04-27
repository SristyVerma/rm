const app=require('./index')
const dotenv=require("dotenv")
const connectDatabase=require('./database/connection')
console.log("hi")
//config
dotenv.config({ path: './config/.env' })
//database connection
connectDatabase()
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})