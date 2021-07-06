const sequelize = require("../config/connection");
const counselorSeed = require("./counselorData");
const residentSeed = require("./residentData");
const centerSeed = require("./centerData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await centerSeed();

  await counselorSeed();

  await residentSeed();

  process.exit(0);
};

seedAll();
