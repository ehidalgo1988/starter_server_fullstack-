import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const body = req.body;
    // console.log("body", body);
    const product = await Product.create({
      ...req.body,
    });

    res.json(product);
  } catch (error) {
    res.json({ error: error });
    console.log(first);
  }
};

export const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = async (req, res) => {
  try {
    // console.log("single user router");
    const product = await Product.findById(req.params._id);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    // console.log(req.body);
    const _id = req.params._id;
    const product = await Product.updateOne({ _id }, req.body);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    // console.log(req.params._id);
    const removedProduct = await Product.findByIdAndDelete(req.params._id);
    res.json(removedProduct);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
