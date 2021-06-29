const router = require("express").Router();
const logRoutes = require("./logRoutes");
const counselorRoutes = require("./counselorRoutes");
const calendarRoutes = require("./calendarRoutes");
const noteRoutes = require("./noteRoutes");
const authRoutes = require("./authRoutes");
const residentRoutes = require("./residentRoutes");
const getRoutes = require("./getRoutes");

router.use("/api/log", logRoutes);
router.use("/api/counselor", counselorRoutes);
router.use("/api/resident", residentRoutes);
router.use("/api/get", getRoutes);
router.use("/api/date", calendarRoutes);
router.use("/api/note", noteRoutes);
router.use("/api/auth", authRoutes);

module.exports = router;
