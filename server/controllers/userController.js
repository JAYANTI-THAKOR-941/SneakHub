import User from "../models/User.js";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";



// mail config
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jyantithakor941@gmail.com',
        pass: 'nqmqfikyaxyjaitw',
    }
})

// register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                message: "User already exists"
            });

        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            otp,
            otpExpire: Date.now() + 10 * 60 * 1000 
        });

        await transporter.sendMail({
            from: `"SneakHub" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "SneakHub OTP Verification",
            html: `<h2>Your OTP is: ${otp}</h2>`
        });

        res.status(201).json({
            message: "OTP sent to your email"
        });
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
};

export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "User not found.!!!" });
        }

        if (user.otp !== otp || user.otpExpire < Date.now()) {
            res.status(400).json({ message: "Invalid otp or expire otp.!" });
        }

        user.isVerified = true;
        user.otp = undefined;
        user.otpExpire = undefined;

        await user.save();

        res.status(201).json({ message: "User register successfully.!!" });

    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({ message: "User not found.!!!" });
        }

        if (!user.isVerified) {
            res.status(400).json({ message: "Please verify your email.!!" });
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            res.status(400).json({ message: "Invalid password !" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({
            message: "Login Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }
    catch (error) {
        res.status(501).json({ message: error })
    }
}