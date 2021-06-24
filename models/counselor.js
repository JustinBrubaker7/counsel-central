const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Counselor extends Model {}

module.exports = Counselor;
