import { Router } from "express";
import {
  allProductsController,
  getProductByCategory,
  getSingleProduct,
} from "../controller/products";

const router = Router();

router.get("/all", allProductsController);
router.get("/:id", getSingleProduct);
router.get("/category/:category", getProductByCategory);

export default router;
