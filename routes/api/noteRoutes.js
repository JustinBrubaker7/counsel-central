const router = require("express").Router();
const { Center, Counselor, Resident, Note } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
//const transporter = require("../config/nodemailer");

// ---------- Uncomment When NOTE Model has been Added --------------

// Routes all defined on /api/note

// Create a new note /api/note/create
router.post("/create", async (req, res) => {
  try {
    newNote = await Note.create({
      counselor_id: req.body.counselor_id,
      resident_id: req.body.resident_id,
      note: req.body.note,
      date: req.body.date
    }).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a new note /api/note/create
router.post("/update", async (req, res) => {
  newNote = await Note.update(
    {
      where: {
        id: req.params.id,
      },
    },
    {
      body: req.body.body,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      date: req.body.date,
    }
  );
});

// Create a new note /api/note/create
router.delete("/delete", async (req, res) => {
  newNote = await Note.destroy({
    where: {
      id: req.params.id,
    },
  });
});

module.exports = router;
