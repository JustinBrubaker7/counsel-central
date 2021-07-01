const router = require("express").Router();
const logRoutes = require("./logRoutes");
const counselorRoutes = require("./counselorRoutes");
const calendarRoutes = require("./calendarRoutes");
const noteRoutes = require("./noteRoutes");
const authRoutes = require("./authRoutes");
const residentRoutes = require("./residentRoutes");
const getRoutes = require("./getRoutes");

router.use("/log", logRoutes);
router.use("/counselor", counselorRoutes);
router.use("/resident", residentRoutes);
router.use("/get", getRoutes);
router.use("/date", calendarRoutes);
router.use("/note", noteRoutes);
router.use("/auth", authRoutes);

module.exports = router;
