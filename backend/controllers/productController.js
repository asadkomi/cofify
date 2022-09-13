import Product from '../models/product.js'

const getProducts = async(req, res) => {

    try {
        const products = await Product.find()
        res.status(200).json({
        success:true,
        count: products.length,
        products
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            error: error.message
        })
    }
    
}
const getSingleProduct = async(req, res) => {

    try {
        const product = await Product.findById(req.query.id)
        if(!product) {
            res.status(404).json({
                success:false,
                error: "Product not found with this ID"
            })
        }
        res.status(200).json({
        success:true,
       
        product
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            error: error.message
        })
    }
    
}

const addProduct = async(req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error: error.message
        })
    }
   
}

const updateSingleProduct = async(req, res) => {

    try {
        let product = await Product.findById(req.query.id)
        if(!product) {
            res.status(404).json({
                success:false,
                error: "Product not found with this ID"
            })
        }

        product = await Product.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(200).json({
        success:true,
       
        product
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            error: error.message
        })
    }
    
}

export {
    getProducts,
    getSingleProduct,
    addProduct,
    updateSingleProduct,
}