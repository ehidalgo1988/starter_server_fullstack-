import express from "express";
import {
  allUser,
  createUser,
  deleteUser,
  singleUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create-user", createUser);
router.get("/all-users", allUser);
router.get("/user/:_id", singleUser);
router.put("/user-update/:_id", updateUser);
router.delete("/user/:_id", deleteUser);

export default router;
