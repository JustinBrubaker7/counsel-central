const { GroupEvent, SelfEvent } = require("../models");

const eventData = [
  {
    title: "Group Event",
    start: "7/17/2021",
    end: "7/18/2021",
    center_id: 1,
  },

  {
    title: "Our Event",
    start: "7/20/2021",
    end: "7/21/2021",
    center_id: 2,
  },

  {
    title: "We All Have An Event",
    start: "7/5/2021",
    end: "7/10/2021",
    center_id: 3,
  },
  {
    title: "Our Event",
    start: "7/20/2021",
    end: "7/21/2021",
    center_id: 4,
  },

  {
    title: "We All Have An Event",
    start: "7/5/2021",
    end: "7/10/2021",
    center_id: 5,
  },
  {
    title: "Our Event",
    start: "7/20/2021",
    end: "7/21/2021",
    center_id: 6,
  },

  {
    title: "We All Have An Event",
    start: "7/5/2021",
    end: "7/10/2021",
    center_id: 3,
  },
];

const seedGroupEvent = () => GroupEvent.bulkCreate(eventData);

const selfEventData = [
  {
    title: "My Event",
    start: "7/17/2021",
    end: "7/18/2021",
    counselor_id: 2,
  },

  {
    title: "My Other Event",
    start: "7/20/2021",
    end: "7/21/2021",
    counselor_id: 2,
  },
  {
    title: "My Event",
    start: "7/17/2021",
    end: "7/18/2021",
    counselor_id: 1,
  },

  {
    title: "My Other Event",
    start: "7/20/2021",
    end: "7/21/2021",
    counselor_id: 1,
  },
  {
    title: "My Event",
    start: "7/17/2021",
    end: "7/18/2021",
    counselor_id: 3,
  },

  {
    title: "My Other Event",
    start: "7/20/2021",
    end: "7/21/2021",
    counselor_id: 3,
  },
  {
    title: "My Event",
    start: "7/17/2021",
    end: "7/18/2021",
    counselor_id: 4,
  },

  {
    title: "My Other Event",
    start: "7/20/2021",
    end: "7/21/2021",
    counselor_id: 5,
  },
];

const seedSelfEvent = () => SelfEvent.bulkCreate(selfEventData);

module.exports = { seedSelfEvent, seedGroupEvent };
