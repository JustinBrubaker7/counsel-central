const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const cors = require("cors")

// ---------- Working On Authentication ----------------

// Check to see if the token sent is correct /api/auth/checktoken
router.post("/checktoken", cors(), async (req, res) => {
  try {
    const verify = jwt.verify(req.body.token, "bob");

    if (verify) {
      res.send({ verify });
    }
  } catch (err) {
    res.send({ loggedIn: false, message: "Error with logging in" });
  }
});

module.exports = router;
