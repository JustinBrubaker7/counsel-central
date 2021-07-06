const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Resident extends Model {}

Resident.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    resident_firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resident_lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DOB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    disabled_explanation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContact_firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emergencyContact_lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactRelationship: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relationship_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relationship_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relationship_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relationship_zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    drug_choice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    years_used: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sobriety_length: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hasDetoxed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    counselor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "counselor",
        key: "id",
      },
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
    freezeTableNAme: true,
    modelName: "resident",
  }
);

// age, DOB, first name last name, address, city, state, zip code, Counsellor, allergies, gender, disabilities, phone number
// emergency contact => first_name, last_name, phone number, relationship
//Drug History
//drug of choice
//years using
// length of sobriety
// has detoxed => boolean
module.exports = Resident;
