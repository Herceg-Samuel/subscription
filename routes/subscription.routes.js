import express from "express";
import authorize from "../middleware/auth.middleware.js";

const subscriptionRouter = express.Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription" });
});

subscriptionRouter.post("/", authorize, (req, res) => {
  res.send({ title: "CREATE subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscription" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET user subscription" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
