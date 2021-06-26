const router = require("express").Router();
const { Center, Counselor, Resident } = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer");

// Routes all defined on /api/admin

// Creates a new Resident /api/counselor/create
router.post("/create", async (req, res) => {
  try {
    await Resident.create({
      // Added the center key which needs to be passed through the request, along with the rest of the information
      centerID: req.body.centerID,
      counselorID: req.body.counselorID,
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      location: req.body.location,
    }).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Removes a Resident /api/counselor/remove
router.delete("/remove", async (req, res) => {
  try {
    await Resident.destroy({
      where: {
        id: req.body.id,
      },
    }).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Updates a Resident /api/counselor/update
router.put("/update", async (req, res) => {
  try {
    await Resident.update(
      {
        where: {
          id: req.body.id,
        },
      },
      {
        centerID: req.body.centerID,
        counselorID: req.body.counselorID,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        location: req.body.location,
      }
    ).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
