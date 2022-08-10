//importing express for link routers
const express = require("express");
const router = express.Router();

const genrate = require("../services/PdfGenrator");
const test = require("../services/Bill");

router.get("/post", (req, res) => {
  res.send("post");
});

router.get("/test", (req, res) => {
  return genrate(req, res);
});

router.get("/test1", (req, res) => {
  return test(req, res);
});

module.exports = router;
