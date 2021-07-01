const {Counselor} = require('../models');

const counselorData = [
    {
        name: 'Andrew Smith',
        email:'asmith@counselcentral.org',
    },

    {
        name: 'Kobe Bryant',
        email: 'kbryant@counselcentral.org'
    },

    {
        name: 'Andrew Yasrebi',
        email: 'ayasrebi@counselcentral.org'
    },
    
    {
        name: 'Yao Ming',
        email: 'yming@counselcentral.org'
    },
    
    {
        name: 'Tracy Macgrady',
        email: 'tmac@counselcentral.org'
    },
];

const seedCounselor = () => Counselor.bulkCreate(counselorData);

module.exports = seedCounselor;

