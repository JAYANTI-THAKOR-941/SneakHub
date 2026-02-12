import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    longDescription:{
        type:String,
    },
    category:{
        type:String,
    },
    price:{
        type:Number
    },
    stock:{
        type:Number,
    },
    image:{
        type:String
    }
},{
    timestamp:true
});

const Product = mongoose.model('Product',productSchema);

export default Product;