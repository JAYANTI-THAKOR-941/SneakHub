import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.end("SneakHub Server is Working.!");
})

// import routes
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);




app.listen(PORT, () => {
    console.log(`Server is Running on : http://localhost:${PORT}`);
})