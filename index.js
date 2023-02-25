import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

connection();

const PORT = 8000;

app.listen(PORT, (req, res) =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

// DefaultData();
