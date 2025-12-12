// const express = require("express");  //type = common json
import express from "express"     //type = module
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "../src/config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005

//middlerwares
app.use(
    cors({
        origin:"http://localhost:5173",
    })
);
app.use(express.json())   //This middleware will parse JSON bodies: req.body
app.use(rateLimiter)

//Our simple custom middleware
// app.use((req,res,next) => {
//     console.log(`Req method ${req.method} & Req URL is ${req.url}`);
//     next();
// }) 

app.use("/api/notes",notesRoutes);

connectDB().then(() => {
    app.listen(PORT,() => {
        console.log("Server started on PORT:",PORT);
    });
});


