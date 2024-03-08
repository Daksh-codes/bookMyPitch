import express from "express";
import { registerUser , loginUser , updateUser  } from "../controllers/userController.js";
import Auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser );
router.post("/login", loginUser );
router.put("/update/:userId", Auth , updateUser );

export default router