const { Counselor } = require("../models");

const counselorData = [
  {
    name: "Andrew Smith",
    email: "asmith@counselcentral.org",
    password: "password1234",
  },

  {
    name: "Kobe Bryant",
    email: "kbryant@counselcentral.org",
    password: "password1234",
  },

  {
    name: "Andrew Yasrebi",
    email: "ayasrebi@counselcentral.org",
    password: "password1234",
  },

  {
    name: "Yao Ming",
    email: "yming@counselcentral.org",
    password: "password1234",
  },

  {
    name: "Tracy Macgrady",
    email: "tmac@counselcentral.org",
    password: "password1234",
  },
];

const seedCounselor = () => Counselor.bulkCreate(counselorData);

module.exports = seedCounselor;
