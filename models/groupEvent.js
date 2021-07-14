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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.STRING,
    },
    end: {
      type: Date,
      allowNull: false,
    },
    center_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "center",
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
