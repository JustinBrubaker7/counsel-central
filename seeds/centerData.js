const { Center } = require("../models");

const centerData = [
  {
    name: "Austin Rehab Center",
    address: "4500 West Guadalupe Street",
    city: "Austin",
    state: "Texas",
    zipCode: "78762",
    residentCount: 400,
    bedCount: 600,
    counselorCount: 25,
    director_name: "Andrew Garfield",
    email: "agarfield@example.com",
    phone: 5126654350,
    password: "IThinkThisIsAPassword",
  },

  {
    name: "Riverside Rehabilitation",
    address: "3000 Big Springs Roada",
    city: "Riverside",
    state: "Califorina",
    zipCode: "92510",
    residentCount: 5,
    bedCount: 5,
    counselorCount: 5,
    director_name: "Tom Holland",
    email: "tholland@example.com",
    phone: 5126654350,
    password: "passwordQ1",
  },
  {
    name: "Bobbeh Rehabilitation",
    address: "3000 Big Springs Roada",
    city: "Riverside",
    state: "Califorina",
    zipCode: "92510",
    residentCount: 5,
    bedCount: 5,
    counselorCount: 5,
    director_name: "Johhny Boi",
    email: "wron2@hotmail.com",
    phone: 9514278876,
    password: "$2b$10$WlA6JytUJ5ba/cXXZVVFjuAFT7cq4.2JtNpUWX2Uh9eeG4Wm6sX6C",
  },
];

const centerSeed = () => Center.bulkCreate(centerData);

module.exports = centerSeed;
