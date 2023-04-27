
const catchAsyncError = require('../middleware/catchAsyncError')
const Product=require('../models/productModels')
const ErrorHandler = require('../utils/errorHandler')


//Create Product--Admin
exports.createProduct=catchAsyncError(async (req,res,next)=>{
    const product=await Product.create(req.body)
    if (!product) {
      return next(new ErrorHandler('Product not found',404))
    }
    res.status(201).json({
        success:true,
        product
    })
})

//Update Product--Admin
exports.updateProduct=catchAsyncError(async(req,res,next)=>{
    let product=await Product.findById(req.params.id)
    if (!product) {
      return next(new ErrorHandler('Product not found',404))
    }
     product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        product
    })
})


//DELETE PRODUCT
exports.deleteProduct =catchAsyncError( async (req, res, next) => {
   
      const product = await Product.findById(req.params.id)
      console.log(product)
      if (!product) {
       return next(new ErrorHandler("Product not found",404))
      }
      await product.remove()
      res.status(200).json({
        success: true,
        message: "Product deleted successfully"
      })
     
  })
  
//GET ALL PRODUCTS 
exports.getAllProducts=catchAsyncError(async (req,res)=>{
    const products=await Product.find()
    res.status(200).json({
        success:true,
        products
    })})


    //SINGLE PRODUCT //
    exports.getProductDetails =catchAsyncError( async (req, res, next) => {
        
          let product = await Product.findById(req.params.id);
          if (!product) {
            return next(new ErrorHandler('Product not found',404))
          }
          res.status(200).json({
            success: true,
            product,
          });
     
        })
      
      

    