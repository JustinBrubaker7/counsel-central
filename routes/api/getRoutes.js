const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../../config/nodemailer");
const cors = require('cors');

// Routes all defined on /api/get
router.get("/", async (req, res) => {
  const theString = JSON.stringify(req.body);
  const newString = await bcrypt.hash(theString, 7);
  console.log(newString);

  res.send(newString);
});

// Return all residents /api/get/resident
router.get("/resident", cors(), async (req, res) => {
  try {
    const residentData = await Resident.findAll();
    res.status(200).json(residentData);
    console.log(residentData)
  } catch (err) {
    res.status(500).json(err);
  }

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

// Return all centers, counselors, and residents /api/get/center
router.get("/center", async (req, res) => {
  getAll = await Center.findAll({
    include: {
      Counselor,
      Resident,
    },
  });

  const Centers = getAll.map((getInfo) => getInfo({ plain: true }));

  req.send(Centers);
});

// // Return all notes /api/get/notes
// router.get("/notes", async (req, res) => {
//   getAll = await Note.findAll({
//     raw: true,
//   });

//   res.send(getAll);
// });

module.exports = router;
