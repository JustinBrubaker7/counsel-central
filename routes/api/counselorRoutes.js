const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const cors = require("cors")

// Routes all defined on /api/counselor

// Creates a new counselor /api/counselor/create
router.post("/create", cors(), async (req, res) => {
  try {
    const newCounselor = await Counselor.create({
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

// Removes a counselor /api/counselor/remove
router.delete("/remove", cors(), async (req, res) => {
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

// Updates a couselor /api/counselor/update
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
      }
    ).then((data) => {
      res.send(data);
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Updates a couselor /api/counselor/updatepass/(counselor ID)
router.put("/updatepass", cors(), async (req, res) => {
  try {
    await Counselor.update(
      {
        where: {
          id: req.body.id,
        },
      },
      {
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
