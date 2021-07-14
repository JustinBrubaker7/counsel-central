const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Creates a new Center /api/center
router.post("/", cors(), async (req, res) => {
  try {
    await Center.create({
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      residentCount: req.body.residentCount,
      bedCount: req.body.bedCount,
      counselorCount: req.body.counselorCount,
      director_name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    }).then((data) => {
      let payload = {
        id: data.id,
        center_id: data.id,
        isAdmin: true,
      };
      const user_token = jwt.sign(payload, "bob", {
        expiresIn: 7200,
        algorithm: "HS256",
      });
      console.log(user_token);
      res.status(200).send({ token: user_token });
      // res.json(data);
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// Creates a new Center /api/center/update
// Not for password or email
router.post("/update/:id", cors(), async (req, res) => {
  try {
    await Center.update(
      {
        where: {
          id: req.params.id,
        },
      },
      {
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        residentCount: req.body.residentCount,
        bedCount: req.body.bedCount,
        counselorCount: req.body.counselorCount,
        director_name: req.body.name,
        phone: req.body.phone,
      }
    );
    res.send("Center successfully updated");
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// Creates a new Center /api/center/update
// Not for password or email
router.delete("/delete/:id", cors(), async (req, res) => {
  try {
    await Center.update({
      where: {
        id: req.params.id,
      },
    });
    res.send("Center successfully deleted");
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// Updates a couselor /api/center/update/(center ID)
router.put("/updatepass/:id", async (req, res) => {
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
