import express from "express";

import {
  allProducts,
  createProduct,
  deleteProduct,
  singleProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/create-product", createProduct);

router.get("/all-products", allProducts);
router.get("/product/:_id", singleProduct);
router.put("/product-update/:_id", updateProduct);
router.delete("/product/:_id", deleteProduct);

export default router;
