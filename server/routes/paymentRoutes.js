import express from "express";
import { checkout, getKey, paymentVerification } from "../controllers/paymentController.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/checkout", isAuth, checkout);
router.post("/paymentverification", isAuth, paymentVerification);
router.get("/getkey", isAuth, getKey);

export default router;
