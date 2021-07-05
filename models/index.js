const Counselor = require("./counselor");
const Center = require("./center");
const Resident = require("./resident");

Center.hasMany(Counselor, {
  foreignKey: "center_id,",
});

Center.hasMany(Resident, {
  foreignKey: "center_id,",
});

Counselor.hasMany(Resident, {
  foreignKey: "counselor_id",
});

Counselor.belongsTo(Center, {
  foreignKey: "center_id",
});

Resident.belongsTo(Counselor, {
  foreignKey: "counselor_id",
});

module.exports = { Counselor, Center, Resident };
