// import express from "express"
// import cors from "cors"
const express = require("express")
const cors = require("cors")
//import restaurants from "./api/routes/restaurants.route.js"
const restaurants = require("./api/routes/restaurants.route.js")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.get("*", (req, res) => res.status(404).json({ error: "not found"}))
app.listen(5000, () => {
	console.log('Server listening...');
})
module.exports = app