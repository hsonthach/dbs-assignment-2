require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const rootRouter = require("./routes/index");
app.use(cors());
app.use(express.json());
app.use(rootRouter);

module.exports = app;
