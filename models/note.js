const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Note extends Model { }

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    note: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE,
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
