import express from "express";
import { PORT } from './config/env.js'
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(PORT, () => {
    console.log("The server is Running");
});
