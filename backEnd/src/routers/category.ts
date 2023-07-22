import express from "express";
import { createCategory, getCategories, getCategory } from "../controllers/category";
import {authenticate} from "../middlewares/authenticate"
import {authorization} from "../middlewares/authorization"
const router = express.Router();

router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);
router.post("/categories",authenticate,authorization, createCategory);

export default router;
