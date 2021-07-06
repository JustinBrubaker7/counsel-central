const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");

// ---------- Working On Authentication ----------------

// Routes all defined on /api/auth
// router.post("/", async (req, res) => {
//   const theString = JSON.stringify(req.body);
//   const newString = await bcrypt.hash(theString, 7);
//   console.log(newString);

//   res.send(newString);
// });

module.exports = router;
