// import app from "./server.js";
const app = require("./server");
//import mongodb from "mongodb";
const mongodb = require("mongodb");
//import dotenv from "dotenv";
require("dotenv").config()
//import express from "express";

//dotenv.config();
//access to mongoclient from mongodb
const MongoClient = mongodb.MongoClient;

//If PORT not accessed will be connected to 8000
const port = process.env.PORT || 8000;

//connect to database
MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  //no of people to connect at a time
  maxPoolSize: 50,
  //timeout at 2500ms
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
      console.log(`listening at port ${port}`);
  });
