const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Counselor extends Model {}

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
            }
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
        sequelize,
        freezeTableNAme: true,
        underscored: true,
        modelName: 'counselor',
    },
);

//name
//email
//password => can't be null, generate random password
//residents under counselor
// photo/profile picture
//

module.exports = Counselor;
