import dotenv from "dotenv";
import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;
    // console.log(req.body);
    const user = await User.create({
      name,
      email,
      password,
      avatar,
    });

    res.json(user);
  } catch (error) {
    res.json({ error: error });
    console.log(first);
  }
};

export const allUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const singleUser = async (req, res) => {
  try {
    // console.log("single user router");
    const user = await User.findById(req.params._id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    console.log(req.body);
    const _id = req.params._id;
    const user = await User.updateOne({ _id }, req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = async (req, res) => {
  try {
    // console.log(req.params._id);
    const removedUser = await User.findByIdAndDelete(req.params._id);
    res.json(removedUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
