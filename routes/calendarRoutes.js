const router = require("express").Router();
const { Center, Counselor, Resident } = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer");

// Routes all defined on /api/date
router.post("/", async (req, res) => {
  let A;
});

module.exports = router;
