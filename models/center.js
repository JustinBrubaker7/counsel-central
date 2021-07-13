const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Center extends Model {
  checkCenterPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Center.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    residentCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    bedCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    counselorCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    director_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    phone: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        console.log("Hook is working");
        return newUserData;
      },
    },
    sequelize,
    freezeTableName: true,
    modelName: "center",
  }
);

//center name
//center address => city ,state, zip
//max number of beds
//name of point of contact, email, and phone number =>
//password
//current number of residents
// number of counsellors
// website
//

module.exports = Center;
