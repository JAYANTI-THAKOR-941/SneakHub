import Product from "../models/Product.js";


export const createProduct = async (req, res) => {
    try {
        let product = await Product.create(req.body);
        res.status(201).json({ message: "Product Created Successfully.", product })
    }
    catch (error) {
        res.status(501).json({ message: error });
    }

}

export const getAllProduct = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(201).json(products);
    }
    catch (error) {
        res.status(501).json({ message: error });
    }

}

export const getProductById = async (req, res) => {
    try {
        let product = await Product.findOne(req.params.id);
        if(!product){
            res.status(401).json({message:"Product Not Found.!!"});
        }
        res.status(201).json(product);
    }
    catch (error) {
        res.status(501).json({ message: error });
    }
}

export const updateProduct = async (req, res) => {
    try {

        let updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(updatedProduct);

    } catch (error) {
        res.status(501).json({ message: error });
    }
}

export const deleteProduct = async(req,res)=>{
    try{
        let product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            res.status(401).json({message:"Product Not Found.!!"});
        }
        res.status(201).json({message:"Product Deleted Successfully.!!"});
    }
    catch (error) {
        res.status(501).json({ message: error });
    }
}