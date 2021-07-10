const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("./nodemailer");
const jwt = require("jsonwebtoken");
// Routes all defined on /api/log

// Login route /api/log/login
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    let isAdmin;
    let theUser;

    const centerCheck = await Center.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (centerCheck === null) {
      const userCheck = await Counselor.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userCheck === null) {
        res.status(400).json({ message: "Wrong email or password, try again" });
        return;
      }

      const correctPassword = await userCheck.checkCounselorPassword(
        req.body.password
      );

      if (!correctPassword) {
        res.status(400).json({ message: "Wrong email or password, try again" });
        return;
      }

      isAdmin = false;
      theUser = userCheck;
    } else {
      const adminPassword = await userCheck.checkPassword(req.body.password);

      if (!adminPassword) {
        res.status(400).json({ message: "Wrong email or password, try again" });
        isAdmin = false;
        return;
      }

      isAdmin = true;
      theUser = centerCheck;

      console.log("Youre logged in as a lord of winterfell");
      //res.json({ user: userCheck, message: "You are logged in!" });
      console.log("Youre logged in as a pleb");
    }

    //res.json({ user: userCheck, message: "You are logged in!" });
    const payload = {
      id: theUser.id,
      isAdmin: isAdmin,
    };

    const user_token = jwt.sign(payload, "bob", {
      expiresIn: 86400,
      algorithm: "HS256",
    });
    console.log(user_token);

    res.send(user_token);

    // const verify = jwt.verify(user_token, "bob");

    // console.log(verify);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", async (req, res) => {});

// Create counselors on /api/log/signup
router.post("/signup", async (req, res) => {
  try {
    const newUser = await Counselor.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      center_id: req.body.center_id,
    });

    console.log(newUser);
    res.send("Comgramtulatins you signed up");
  } catch (err) {
    console.log(err);
  }
});

// Create counselors on /api/log/signup
router.post("/newuser", async (req, res) => {
  try {
    console.log(newUser);
    res.send("Comgramtulatins you signed up");
  } catch (err) {
    console.log(err);
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
