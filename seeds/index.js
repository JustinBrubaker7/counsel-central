const sequelize = require("../config/connection");
const counselorSeed = require("./counselorData");
const residentSeed = require("./residentData");
const centerSeed = require("./centerData");

const seedAll = async () => {
<<<<<<< HEAD
    await sequelize.sync({ force: true });
=======
  await sequelize.sync({ force: true });
>>>>>>> cf6d728df6f40967540014f054a09692dbc87620

  await centerSeed();

  await counselorSeed();

<<<<<<< HEAD
    // await centerSeed();
=======
  await residentSeed();
>>>>>>> cf6d728df6f40967540014f054a09692dbc87620

  process.exit(0);
};

seedAll();
