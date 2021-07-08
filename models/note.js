const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Note extends Model {}

Note.init(
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
    body: {
      type: DataTypes.STRING,
    },
    side_note: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    counselor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "counselor",
        key: "id",
      },
    },
    resident_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "resident",
        key: "id",
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    modelName: "note",
  }
);

module.exports = Note;
