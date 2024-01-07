import express from "express";
import {
  allUser,
  createUser,
  deleteUser,
  singleUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// router for createuser, allUser, singleUser, updateUser, deleteUser


export default router;
