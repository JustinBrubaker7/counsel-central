const { Counselor } = require("../models");

const counselorData = [
  {
    center_id: 1,
    name: "Andrew Smith",
    email: "asmith@counselcentral.org",
    password: "password1234",
  },

  {
    center_id: 1,
    name: "Kobe Bryant",
    email: "kbryant@counselcentral.org",
    password: "password1234",
  },

  {
    center_id: 2,
    name: "Andrew Yasrebi",
    email: "ayasrebi@counselcentral.org",
    password: "password1234",
  },

  {
    center_id: 2,
    name: "Yao Ming",
    email: "yming@counselcentral.org",
    password: "password1234",
  },

  {
    center_id: 2,
    name: "Tracy Macgrady",
    email: "tmac@counselcentral.org",
    password: "password1234",
  },
];

const seedCounselor = () => Counselor.bulkCreate(counselorData);

module.exports = seedCounselor;
