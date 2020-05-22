const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require("./routes/index"));

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
