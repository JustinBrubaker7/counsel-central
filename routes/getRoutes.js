const router = require("express").Router();
const { Center, Counselor, Resident } = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer");

// Routes all defined on /api/get

// Return all residents /api/get/resident
router.get("/resident", async (req, res) => {
  getAll = await Resident.findAll({
    raw: true,
  });

  res.send(getAll);
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

  res.send(getAll);
});

// Return all centers, counselors, and residents /api/get/center
router.get("/center", async (req, res) => {
  getAll = await Center.findAll({
    include: {
      Counselor,
      Resident,
    },
    raw: true,
  });

  res.send(getAll);
});

// // Return all notes /api/get/notes
// router.get("/notes", async (req, res) => {
//   getAll = await Note.findAll({
//     raw: true,
//   });

//   res.send(getAll);
// });

module.exports = router;
