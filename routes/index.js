const router = require("express").Router();
const logRoutes = require("./logRoutes");
const adminRoutes = require("./adminRoutes");
const calendarRoutes = require("./calendarRoutes");
const noteRoutes = require("./noteRoutes");
const authRoutes = require("./authRoutes");

router.use("/api", logRoutes);
router.use("/api/admin", adminRoutes);
router.use("/api/date", calendarRoutes);
router.use("/api/note", noteRoutes);
router.use("/api/auth", authRoutes);

module.exports = router;
