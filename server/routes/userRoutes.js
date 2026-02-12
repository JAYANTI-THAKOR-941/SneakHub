import express from 'express'
import { loginUser, registerUser, verifyOtp } from '../controllers/userController.js';

const router = express();

router.post('/register',registerUser);
router.post('/verifyOtp',verifyOtp);
router.post('/login',loginUser);

export default router;