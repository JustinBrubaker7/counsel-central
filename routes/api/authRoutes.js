const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
// ---------- Working On Authentication ----------------

// Check to see if the token sent is correct /api/auth/checktoken
router.post("/checktoken", cors(), async (req, res) => {
  try {
    const verify = jwt.verify(req.body.token, "bob");

    console.log(verify)
    if (verify) {
      res.send({ verify });
    }
  } catch (err) {
    res.send({ loggedIn: false, message: "Error with logging in" });
  }
});

// Check to see if the token sent is correct /api/auth/newpass
router.post("/newpass", async (req, res) => {
  try {
    let email = req.body.email;

    const payload = {
      email: email,
    };

    const token = jwt.sign(payload, "bob", {
      expiresIn: 86400,
      algorithm: "HS256",
    });

    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Change Requested",
      text: `Follow this link to signup change your password at Counsel Central: http://localhost:3000/updatepass/token=${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.send("Comgramtulatins you got an email");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
