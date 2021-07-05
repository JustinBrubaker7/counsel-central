const router = require("express").Router();
const { Center, Counselor, Resident } = require("../models");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = { router, Center, Counselor, Resident };
module.exports = router;
