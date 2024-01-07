import express from "express";

import {
  allProducts,
  createProduct,
  deleteProduct,
  singleProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();
// router create-product, all-products,single product/:id, product-update/:id, deleteproduct/:id


export default router;
