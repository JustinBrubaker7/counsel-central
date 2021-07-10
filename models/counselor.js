const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Counselor extends Model {
  checkCounselorPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Counselor.init(
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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
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
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        console.log("Hook is working");
        return newUserData;
      },
    },
    sequelize,
    freezeTableName: true,
    modelName: "counselor",
  }
);

//name
//email
//password => can't be null, generate random password
//residents under counselor
// photo/profile picture
//

module.exports = Counselor;
