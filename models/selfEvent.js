const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class selfEvent extends Model {}

selfEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.STRING,
    },
    end: {
      type: DataTypes.STRING,
    },
    counselor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "counselor",
        key: "id",
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    modelName: "selfevent",
  }
);

module.exports = selfEvent;
