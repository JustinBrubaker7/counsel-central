const router = require("express").Router();
const { Center, Counselor, Resident } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");

// Routes all defined on /api/resident

// Creates a new Resident /api/resident/create
router.post("/create", async (req, res) => {
  try {
    await Resident.create({
      // Added the center key which needs to be passed through the request, along with the rest of the information
      center_id: req.body.centerID,
      counselor_id: req.body.counselorID,
      resident_firstName: req.body.resident_firstName,
      resident_lastName: req.body.resident_lastName,
      age: req.body.age,
      DOB: req.body.DOB,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      allergies: req.body.allergies,
      gender: req.body.gender,
      disabled: req.body.disabled,
      disabled_explanation: req.body.disabled_explanation,
      emergencyContact_firstName: req.body.emergencyContact_firstName,
      emergencyContact_lastName: req.body.emergencyContact_lastName,
      contactRelationship: req.body.contactRelationship,
      relationship_address: req.body.relationship_address,
      relationship_city: req.body.relationship_city,
      relationship_state: req.body.relationship_state,
      relationship_zipCode: req.body.relationship_zipCode,
      drug_choice: req.body.drug_choice,
      years_used: req.body.years_used,
      sobriety_length: req.body.sobriety_length,
      hasDetoxed: req.body.hasDetoxed,
    }).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Removes a Resident /api/resident/remove
router.delete("/remove", async (req, res) => {
  try {
    await Resident.destroy({
      where: {
        id: req.body.id,
      },
    }).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// Updates a Resident /api/resident/update
router.put("/update", async (req, res) => {
  try {
    await Resident.update(
      {
        where: {
          id: req.body.id,
        },
      },
      {
        center_id: req.body.centerID,
        counselor_id: req.body.counselorID,
        resident_firstName: req.body.resident_firstName,
        resident_lastName: req.body.resident_lastName,
        age: req.body.age,
        DOB: req.body.DOB,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        allergies: req.body.allergies,
        gender: req.body.gender,
        disabled: req.body.disabled,
        disabled_explanation: req.body.disabled_explanation,
        emergencyContact_firstName: req.body.emergencyContact_firstName,
        emergencyContact_lastName: req.body.emergencyContact_lastName,
        contactRelationship: req.body.contactRelationship,
        relationship_address: req.body.relationship_address,
        relationship_city: req.body.relationship_city,
        relationship_state: req.body.relationship_state,
        relationship_zipCode: req.body.relationship_zipCode,
        drug_choice: req.body.drug_choice,
        years_used: req.body.years_used,
        sobriety_length: req.body.sobriety_length,
        hasDetoxed: req.body.hasDetoxed,
      }
    ).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
