import User from "../models/User.js";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
    try {
        const { productId, size, quantity } = req.body;
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const existingItemIndex = user.cart.findIndex(
            item => item.product.toString() === productId && item.size === size
        );

        if (existingItemIndex > -1) {
            user.cart[existingItemIndex].quantity += quantity || 1;
        } else {
            user.cart.push({ product: productId, size, quantity: quantity || 1 });
        }

        await user.save();
        res.status(200).json({ message: "Added to cart", cart: user.cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).populate("cart.product");

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ cart: user.cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { itemId } = req.params; // Using item _id in the cart array
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.cart = user.cart.filter(item => item._id.toString() !== itemId);
        await user.save();

        res.status(200).json({ message: "Item removed", cart: user.cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
