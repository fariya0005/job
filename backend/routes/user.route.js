import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js"; // Corrected the import path

const router = express.Router();

// User registration route
router.post("/register", singleUpload, register);

// User login route
router.post("/login", login);

// User logout route
router.get("/logout", logout);

// Update user profile route
router.post("/profile/update", isAuthenticated, singleUpload, updateProfile);

export default router;