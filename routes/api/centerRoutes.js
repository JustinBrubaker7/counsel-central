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
            password: req.body.password
        }).then((data) => {
            let payload = {
                message: "hi"
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
        res.json(err)
    }
});


module.exports = router;

