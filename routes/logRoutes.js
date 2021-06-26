const router = require("express").Router();
const { Center, Counselor, Resident } = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer");

// Routes all defined on /api/log

// Login route /api/log/login
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userCheck = await Counselor.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userCheck.length === 0) {
      res.status(400).json({ message: "Wrong email or password, try again" });
      return;
    }

    const correctPassword = await userCheck.checkPassword(req.body.password);

    if (!correctPassword) {
      res.status(400).json({ message: "Wrong email or password, try again" });
      return;
    }

    // Make sure these variables line up with the react frontend
    req.session.save(() => {
      req.session.user_id = userCheck.id;
      req.session.logged_in = true;
      console.log("Youre logged in");
      res.json({ user: userCheck, message: "You are logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout route /api/log/logout
router.post("/logout", async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end;
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
