const { GroupEvent } = require("../models");

const eventData = [
  {
    title: "The Event",
    start: "7/17/2021",
    end: "7/18/2021",
    center_id: 1,
  },

  {
    title: "The Event",
    start: "7/17/2021",
    end: "7/18/2021",
    center_id: 1,
  },

  {
    title: "The Event",
    start: "7/17/2021",
    end: "7/18/2021",
    center_id: 1,
  },
];

const seedGroupEvent = () => Counselor.bulkCreate(eventData);

module.exports = seedGroupEvent;
