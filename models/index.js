const Counselor = require("./counselor");
const Center = require("./center");
const Resident = require("./resident");
const Note = require("./note");
const SelfEvent = require("./selfEvent");
const GroupEvent = require("./groupEvent");

Center.hasMany(Counselor, {
  foreignKey: "center_id",
});

Center.hasMany(Resident, {
  foreignKey: "center_id",
});

Counselor.hasMany(Resident, {
  foreignKey: "counselor_id",
});

Counselor.hasMany(Note, {
  foreignKey: "counselor_id",
});

Resident.hasMany(Note, {
  foreignKey: "resident_id",
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

// Event Relationships
Counselor.hasMany(SelfEvent, {
  foreignKey: "counselor_id",
});

Center.hasMany(GroupEvent, {
  foreignKey: "center_id",
});

SelfEvent.belongsTo(Counselor, {
  foreignKey: "counselor_id",
});

GroupEvent.belongsTo(Center, {
  foreignKey: "center_id",
});

module.exports = { Counselor, Center, Resident, Note, SelfEvent, GroupEvent };
