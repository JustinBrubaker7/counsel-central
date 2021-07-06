const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
//const transporter = require("../config/nodemailer");
const cors = require("cors");

// Routes all defined on /api/get
router.get("/", cors(), async (req, res) => {
  const theString = JSON.stringify(req.body);
  const newString = await bcrypt.hash(theString, 7);
  console.log(newString);

  res.send(newString);
});

// Return all residents /api/get/resident
router.get("/resident", cors(), async (req, res) => {
  const getAll = await Resident.findAll({
    include: Counselor,
    Center,
  });

  const Residents = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Residents);
  console.log(getAll);
});

// Return a specific resident data
router.get("/resident/:id", async (req, res) => {
  getAll = await Resident.findAll(
    {
      where: {
        id: req.params.id,
      },
    },

    {
      include: Counselor,
      Center,
    }
  );

  const Centers = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Centers);
  console.log(getAll);
});

// Return a specific residents by counselor
router.get("/counselor-residents/:id", async (req, res) => {
  getAll = await Resident.findAll(
    {
      where: {
        counselor_id: req.params.id,
      },
    },

    {
      include: Counselor,
      Center,
    }
  );

  const Centers = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Centers);
  console.log(getAll);
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
      Resident,
    }
  );

  const Centers = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Centers);
  console.log(getAll);
});

// Return a specific center data
router.get("/counselor/:id", async (req, res) => {
  getAll = await Counselor.findAll(
    {
      where: {
        id: req.params.id,
      },
    },
    {
      include: Center,
      Resident,
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
