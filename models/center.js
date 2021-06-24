const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Center extends Model {}

module.exports = Center;
