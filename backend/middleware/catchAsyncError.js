module.exports=catchAsynceError=>(req,res,next)=>{
    Promise.resolve(catchAsynceError(req,res,next)).catch(next)
}