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
    email: "agarfield@atx_rehab.org",
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
    email: "tholland@riverside_rehab.org",
    phone: 5126654350,
    password: "ThisIsAPassword",
  },
];

const centerSeed = () => Center.bulkCreate(centerData);

module.exports = centerSeed;
