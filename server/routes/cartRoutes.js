import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js";
import { isAuth } from "../middlewares/isAuth.js"; // Assuming isAuth exists based on userController/userRoutes typically needing protection

const router = express.Router();

router.post("/add", isAuth, addToCart);
router.get("/get", isAuth, getCart);
router.delete("/remove/:itemId", isAuth, removeFromCart);

export default router;
