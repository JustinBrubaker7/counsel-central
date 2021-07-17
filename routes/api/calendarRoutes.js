const router = require("express").Router();
const {
  Center,
  Counselor,
  Resident,
  GroupEvent,
  SelfEvent,
} = require("../../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const cors = require("cors");

// Routes all defined on /api/date/get/(counselor ID)
router.get("/get/:id/:centerID", cors(), async (req, res) => {
  getAll = await GroupEvent.findAll({
    where: {
      center_id: req.params.centerID,
    },
  });

  getOther = await SelfEvent.findAll({
    where: {
      Counselor_id: req.params.id,
    },
  });

  const groupEvents = getAll.map((getInfo) => getInfo.get({ plain: true }));
  const selfEvents = getAll.map((getInfo) => getInfo.get({ plain: true }));

  const allEvents = groupEvents.concat(selfEvents);

  res.send(allEvents);
  console.log(allEvents);
  console.log(getAll);
  console.log("Were Wrokin");
});

module.exports = router;
