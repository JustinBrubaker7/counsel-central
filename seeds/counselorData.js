const { Counselor } = require("../models");

const counselorData = [
  {
    name: "Andrew Smith",
    email: "asmith@example.com",
    password: "password1234",
    center_id: 1,
  },

  {
    name: "Kobe Bryant",
    email: "kbryant@example.org",
    password: "password1234",
    center_id: 1,
  },

  {
    name: "Andrew Yasrebi",
    email: "ayasrebi@example.com",
    password: "password1234",
    center_id: 2,
  },

  {
    name: "Yao Ming",
    email: "yming@example.com",
    password: "password1234",
    center_id: 2,
  },

  {
    name: "Tracy Macgrady",
    email: "tmac@example.com",
    password: "password1234",
    center_id: 2,
  },
];

const seedCounselor = () => Counselor.bulkCreate(counselorData);

module.exports = seedCounselor;
