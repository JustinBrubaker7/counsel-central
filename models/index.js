const Counselor = require("./counselor");
const Center = require("./center");
const Resident = require("./resident");
const Note = require("./note");

Center.hasMany(Counselor, {
  foreignKey: "center_id",
});

Center.hasMany(Resident, {
  foreignKey: "center_id",
});

Counselor.hasMany(Resident, {
  foreignKey: "counselor_id",
});

Note.belongsTo(Counselor, {
  foreignKey: "counselor_id",
});

Note.belongsTo(Resident, {
  foreignKey: "resident_id",
});

Counselor.belongsTo(Center, {
  foreignKey: "center_id",
});

Resident.belongsTo(Counselor, {
  foreignKey: "counselor_id",
});

Resident.belongsTo(Center, {
  foreignKey: "center_id",
});

module.exports = { Counselor, Center, Resident, Note };
