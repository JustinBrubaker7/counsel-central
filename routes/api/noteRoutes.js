const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
<<<<<<< HEAD
const transporter = require("../../config/nodemailer");
=======
//const transporter = require("../config/nodemailer");
>>>>>>> 34d3fd69462e316e67a3df4028f88ea9ff24d42f

// ---------- Uncomment When NOTE Model has been Added --------------

// Routes all defined on /api/note

// // Create a new note /api/note/create
// router.post("/create", async (req, res) => {
//   newNote = await Note.create({
//     counselor_id: req.body.counselor_id,
//     resident_id: req.body.resident_id,
//     body: req.params.body,
//   });
// });

// // Create a new note /api/note/create
// router.post("/update", async (req, res) => {
//   newNote = await Note.update(
//     {
//       where: {
//         id: req.params.id,
//       },
//     },
//     {
//       body: req.params.body,
//     }
//   );
// });

// // Create a new note /api/note/create
// router.delete("/delete", async (req, res) => {
//   newNote = await Note.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
// });

module.exports = router;
