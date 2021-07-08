const router = require("express").Router();
const { Center, Counselor, Resident, Note } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
<<<<<<< HEAD
const nodemailer = require("nodemailer");
const transporter = require("../../config/nodemailer");
const cors = require('cors');
=======
const cors = require("cors");
>>>>>>> cf6d728df6f40967540014f054a09692dbc87620

// Routes all defined on /api/get
router.get("/", cors(), async (req, res) => {
  const theString = JSON.stringify(req.body);
  const newString = await bcrypt.hash(theString, 7);
  console.log(newString);

  res.send(newString);
});

// Return all residents /api/get/resident
router.get("/resident", cors(), async (req, res) => {
<<<<<<< HEAD
  try {
    const residentData = await Resident.findAll();
    res.status(200).json(residentData);
    console.log(residentData)
  } catch (err) {
    res.status(500).json(err);
  }

=======
  const getAll = await Resident.findAll({
    include: [Counselor, Center],
  });

  const Residents = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Residents);
  console.log(getAll);
});

// Return a specific resident data /api/get/resident/(resident ID)
router.get("/resident/:id", async (req, res) => {
  getAll = await Resident.findAll({
    where: {
      id: req.params.id,
    },
    include: [Counselor, Center],
  });

  const Residents = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Residents);
  console.log(getAll);
});

// Return a specific residents by counselor /api/get/counselor-residents/(counselor ID)
router.get("/counselor-residents/:id", async (req, res) => {
  getAll = await Resident.findAll({
    where: {
      counselor_id: req.params.id,
    },
  });

  const Residents = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Residents);
  console.log(getAll);
});

// Return a specific residents by center /api/get/center-residents/(center ID)
router.get("/center-residents/:id", async (req, res) => {
  getAll = await Resident.findAll({
    where: {
      center_id: req.params.id,
    },
    include: [Counselor],
  });

  const Residents = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Residents);
  console.log(getAll);
>>>>>>> cf6d728df6f40967540014f054a09692dbc87620
});

// Return all counselors and residents of Conselor /api/get/counselor
router.get("/counselor", async (req, res) => {
  const getAll = await Counselor.findAll({
    include: [Center, Resident],
  });

  const Counselors = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Counselors);
  console.log(getAll);
});

// Return a specific center data api/get/counselor/(counselor ID)
router.get("/counselor/:id", async (req, res) => {
  getAll = await Counselor.findAll({
    where: {
      id: req.params.id,
    },
    include: [Center, Resident],
  });

  const Centers = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Centers);
  console.log(getAll);
});

// Return a specific counselors by center /api/get/center-counselors/(center ID)
router.get("/center-counselors/:id", async (req, res) => {
  getAll = await Counselor.findAll({
    where: {
      center_id: req.params.id,
    },
    include: [Resident],
  });

  const Counselors = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Counselors);
  console.log(getAll);
});

// Return a specific center data api/get/center/(center ID)
router.get("/center/:id", async (req, res) => {
  getAll = await Center.findAll({
    where: {
      id: req.params.id,
    },
  });

  const Centers = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Centers);
  console.log(getAll);
});

// Return all notes from a specific counselor /api/get/counselor-notes/(counselor ID)
router.get("/counselor-notes/:id", async (req, res) => {
  getAll = await Counselor.findAll({
    where: {
      center_id: req.params.id,
    },
    include: [Note],
  });

  const Notes = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Notes);
  console.log(getAll);
});

// Return all notes for a specific resident /api/get/resident-notes/(resident ID)
router.get("/resident-notes/:id", async (req, res) => {
  getAll = await Note.findAll({
    where: {
      center_id: req.params.id,
    },
    include: [Resident],
  });

  const Notes = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Notes);
  console.log(getAll);
});

// Return all notes /api/get/notes
router.get("/notes", async (req, res) => {
  getAll = await Note.findAll({
    raw: true,
  });

  res.send(getAll);
});

module.exports = router;
