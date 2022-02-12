import express from "express";

const router = express.Router();
//root url will respond with hello world
router.route("/api/vi/restaurants").get((req, res) => res.send("Hello world"));
export default router;
