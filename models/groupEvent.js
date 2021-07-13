const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class groupEvent extends Model {}

groupEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
    },
    date: {
      type: Date,
      allowNull: false,
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
    modelName: "groupevent",
  }
);

module.exports = groupEvent;
