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

  {
    name: "Daniel boi",
    email: "thewron1@gmail.com",
    password: "$2b$10$6cv0dX7keTlnx86B0flRSuweWWBAy941njA82XURMc0oceTohFR02",
    center_id: 3,
  },
];

const seedCounselor = () => Counselor.bulkCreate(counselorData);

module.exports = seedCounselor;
