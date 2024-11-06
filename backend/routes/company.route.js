import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// Route for registering a company
router.route("/register").post(isAuthenticated, registerCompany);

// Route for getting all companies
router.route("/get").get(isAuthenticated, getCompany);

// Route for getting a company by ID
router.route("/get/:id").get(isAuthenticated, getCompanyById);

// Route for updating a company by ID with file upload
router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany);

export default router;