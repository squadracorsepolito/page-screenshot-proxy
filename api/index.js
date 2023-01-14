const proxy = require("html2canvas-proxy");
const express = require("express");

const app = express();
app.use("/api", proxy());

module.exports = app;
