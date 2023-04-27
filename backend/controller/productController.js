
const Product=require('../models/productModels')


//Create Product--Admin
exports.createProduct=async (req,res,next)=>{
    const product=await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}

//Update Product--Admin
exports.updateProduct=async(req,res,next)=>{
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:'Product not found'
        })
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
}


//DELETE PRODUCT
exports.deleteProduct = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id)
      console.log(product)
      if (!product) {
        throw new Error("Product not found")
      }
      await product.remove()
      res.status(200).json({
        success: true,
        message: "Product deleted successfully"
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      })
    }
  }
  
//GET ALL PRODUCTS 
exports.getAllProducts=async (req,res)=>{
    const products=await Product.find()
    res.status(200).json({
        success:true,
        products
    })}


    //SINGLE PRODUCT
    exports.getProductDetails = async (req, res, next) => {
        try {
          let product = await Product.findById(req.params.id);
          if (!product) {
            return res.status(404).json({
              success: false,
              message: "Product not found",
            });
          }
          res.status(200).json({
            success: true,
            product,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            message: "Server error",
          });
        }
      };
      

    