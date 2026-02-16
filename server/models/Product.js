import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number
    },
    stock: {
        type: Number,
    },
    image: {
        type: String,
        required: true
    },
    sizes: [
        {
            type: Number // e.g. 7, 8, 9, 10
        }
    ]
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;