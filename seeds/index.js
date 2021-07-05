const sequelize = require('../config/connection');
const counselorSeed = require('./counselorData');
const residentSeed = require('./residentData');
const centerSeed = require('./centerData');


const seedAll = async () => {
    await sequelize.sync({ force: true });

    await counselorSeed();

    await residentSeed();

    // await centerSeed();

    process.exit(0);
};

seedAll();

