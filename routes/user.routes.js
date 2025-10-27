import express from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE a user" });
});

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE a user" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a user" });
});

export default userRouter;
