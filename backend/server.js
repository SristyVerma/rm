const app=require('./index')
const dotenv=require("dotenv")
const connectDatabase=require('./database/connection')
//Handling uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting down the server due to uncaught exception`)
    process.exit(1)
})
//config
dotenv.config({ path: './config/.env' })
//database connection
connectDatabase()

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})



//unhandledpromise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`)
    console.log("Shutting down the server due to unhandled promise rejection ")
    server.close(()=>{
        process.exit(1)
    })
})