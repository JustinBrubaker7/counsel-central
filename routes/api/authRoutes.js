const router = require("express").Router();
const { Center, Counselor, Resident } = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer");

// ---------- Working On Authentication ----------------

// Routes all defined on /api/auth
router.post("/", async (req, res) => {
  const theString = JSON.stringify(req.body);
  const newString = await bcrypt.hash(theString, 7);
  console.log(newString);

  res.send(newString);
});

// Return all counselors and residents of Conselor /api/get/counselor
router.get("/counselor", async (req, res) => {
  getAll = await Counselor.findAll({
    include: {
      // Notes,
      Resident,
    },
    raw: true,
  });

  const Counselors = getAll.map((getInfo) => getInfo({ plain: true }));

  req.send(Counselors);
});

module.exports = router;
