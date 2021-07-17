const router = require("express").Router();
const { Center, Counselor, Resident, GroupEvent } = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");

// Routes all defined on /api/date/get/(counselor ID)
router.get("/get/:id", async (req, res) => {
  getAll = await GroupEvent.findAll({
    where: {
      center_id: req.params.id,
    },
  });

  const Events = getAll.map((getInfo) => getInfo.get({ plain: true }));

  res.send(Events);
  console.log(getAll);
});

module.exports = router;
