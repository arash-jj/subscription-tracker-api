import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    res.send({ title: "get all subscription" });
});
subscriptionRouter.get("/:id", (req, res) => {
    res.send({ title: "get subscription details" });
});
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) => {
    res.send({ title: "update subscription" });
});
subscriptionRouter.delete("/:id", (req, res) => {
    res.send({ title: "delete subscription" });
});
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.get("/:id/cancel", (req, res) => {
    res.send({ title: "cancel subscription" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    res.send({ title: "get upcoming renewals" });
});

export default subscriptionRouter
