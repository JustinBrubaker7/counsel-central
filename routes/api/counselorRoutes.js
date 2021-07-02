const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../../config/nodemailer");

// Routes all defined on /api/admin

// Creates a new counselor /api/admin/create
router.post("/create", async (req, res) => {
  try {
    await Counselor.create({
      // Added the center key which needs to be passed through the request, along with the rest of the information
      center_id: req.body.centerKey,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then((data) => {
      res.send(data);
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Removes a counselor /api/admin/remove
router.delete("/remove", async (req, res) => {
  try {
    await Counselor.destroy({
      where: {
        id: req.body.id,
      },
    }).then((data) => {
      res.send(data);
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Updates a couselor /api/admin/update
router.put("/update", async (req, res) => {
  try {
    await Counselor.update(
      {
        where: {
          id: req.body.id,
        },
      },
      {
        center_id: req.body.center_id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }
    ).then((data) => {
      res.send(data);
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
