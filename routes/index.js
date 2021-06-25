const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/apiRoutes", apiRoutes);

module.exports = router;
