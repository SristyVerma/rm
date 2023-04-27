
//Error Handler is node ...This is a custom error handler class in Node.js. It extends the built-in Error class and allows us to create custom error objects

class ErrorHandler extends Error{
    constructor(message,statusCode){
super(message)
this.statusCode=statusCode

Error.captureStackTrace(this,this.constructor)
    }
}
module.exports=ErrorHandler