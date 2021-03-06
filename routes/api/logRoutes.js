const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("./nodemailer");
const jwt = require("jsonwebtoken");
const cors = require("cors");
// Routes all defined on /api/log

// Login route /api/log/login
router.post("/login", cors(), async (req, res) => {
  console.log(req.body);
  try {
    let isAdmin;
    let theUser;


    const centerCheck = await Center.findOne({
      where: {
        email: req.body.email,
      },
    });

    console.log(centerCheck);

    if (centerCheck === null) {
      const userCheck = await Counselor.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!userCheck) {
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
      console.log("Youre logged in as a pleb");
      isAdmin = false;
      theUser = userCheck;
    } else {
      const adminPassword = await centerCheck.checkCenterPassword(
        req.body.password
      );

      if (!adminPassword) {
        res.status(400).json({ message: "Wrong email or password, try again" });
        isAdmin = false;
        return;
      }

      isAdmin = true;
      theUser = centerCheck;

      console.log("Youre logged in as a lord of winterfell");
    }

    let payload;

    if (isAdmin) {
      payload = {
        id: theUser.id,
        center_id: theUser.id,
        isAdmin: isAdmin,
      };
    } else if (isAdmin === false) {
      payload = {
        id: theUser.id,
        center_id: theUser.center_id,
        isAdmin: isAdmin,
      };
    }

    const user_token = jwt.sign(payload, "bob", {
      expiresIn: 7200,
      algorithm: "HS256",
    });

    console.log(user_token);
    res.status(200).send({ token: user_token });
    // res.send(user_token);

    // const verify = jwt.verify(user_token, "bob");

    // console.log(verify);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    const verify = jwt.verify(req.body, "bob");

    if (verify) {
      res.send({ loggedIn: true, message: "You are logged in", verify });
    }
  } catch (err) {
    res.send({ loggedIn: false, message: "Error with logging in" });
  }
});

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
    res.status(200).send("you are signed up");
  } catch (err) {
    console.log(err);
  }
});

// Create counselors on /api/log/newuser
router.post("/newuser", cors(), async (req, res) => {
  try {
    res.status(200).send("you are signed up");
    let email = req.body.email;
    let center_id = req.body.center_id;
    let name = req.body.name;


    const payload = {
      email: email,
      center_id: center_id,
      name: name,
    };

    const token = jwt.sign(payload, "bob", {
      expiresIn: 86400,
      algorithm: "HS256",
    });

    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Center has asked you to join Counsel Central",
      text: `Follow this link to signup at Counsel Central: http://localhost:3000/register-counselor/token=${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
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
