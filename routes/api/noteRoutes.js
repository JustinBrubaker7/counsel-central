const router = require("express").Router();
const { Center, Counselor, Resident, Note } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
//const transporter = require("../config/nodemailer");

// Create a new note /api/note/create
router.post("/create", async (req, res) => {
  newNote = await Note.create({
    title: req.params.title,
    body: req.params.body,
    counselor_id: req.body.counselor_id,
    resident_id: req.body.resident_id,
  });
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
      title: req.params.title,
      body: req.params.body,
      side_note: req.params.side_note,
      counselor_id: req.params.counselor_id,
      resident_id: req.params.resident_id,
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
