import 'dotenv/config';
import Razorpay from "razorpay";
import crypto from "crypto";
import User from "../models/User.js";

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

export const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        };
        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Database operation for storing order details
            res.status(200).json({
                success: true,
                message: "Payment Verified Successfully",
                reference: razorpay_payment_id
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Signature Mismatch"
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getKey = (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
};
