const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Resident extends Model {}

module.exports = Resident;
