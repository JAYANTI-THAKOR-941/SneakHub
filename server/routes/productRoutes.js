import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/create',createProduct);
router.put('/update/:id',updateProduct);
router.delete('/delete/:id',deleteProduct);
router.get('/all',getAllProduct);
router.get('/:id',getProductById);

export default router;