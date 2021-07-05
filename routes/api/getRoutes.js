const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
//const transporter = require("../config/nodemailer");

// Routes all defined on /api/get
router.get("/", async (req, res) => {
  const theString = JSON.stringify(req.body);
  const newString = await bcrypt.hash(theString, 7);
  console.log(newString);

  res.send(newString);
});

// Return all residents /api/get/resident
router.get("/resident", async (req, res) => {
  getAll = await Resident.findAll({});

  const Residents = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Residents);
});

// Return all counselors and residents of Conselor /api/get/counselor
router.get("/counselor", async (req, res) => {
  const getAll = await Counselor.findAll({
    include: Center,
    Resident,
  });

  const Counselors = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Counselors);
  console.log(getAll);
});

// Return a specific center data
router.get("/center/:id", async (req, res) => {
  getAll = await Center.findAll(
    {
      where: {
        id: req.params.id,
      },
    },
    {
      include: Counselor,
    }
  );

  const Centers = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Centers);
  console.log(getAll);
});

// // Return all notes /api/get/notes
// router.get("/notes", async (req, res) => {
//   getAll = await Note.findAll({
//     raw: true,
//   });

//   res.send(getAll);
// });

module.exports = router;
