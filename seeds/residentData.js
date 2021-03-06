const { Resident } = require("../models");

const residentData = [
  {
    resident_firstName: "Eden",
    resident_lastName: "Fearn",
    age: 32,
    DOB: "3/08/1989",
    phoneNumber: 9093041650,
    address: "214 Longfellow St",
    city: "Sunnyside",
    state: "New York",
    zipCode: 11104,
    allergies: "wheat, fish",
    gender: "Female",
    disabled: false,
    disabled_explanation: null,
    emergencyContact_firstName: "Christel",
    emergencyContact_lastName: "Fearn",
    contactRelationship: "mother",
    relationship_address: "9505 Del Monte St.",
    relationship_city: "Romulus",
    relationship_state: "Michigan",
    relationship_zipCode: 48174,
    drug_choice: "codeine",
    years_used: 7,
    sobriety_length: 1,
    hasDetoxed: true,
    center_id: 1,
    counselor_id: 1,
  },
  {
    resident_firstName: "Christine",
    resident_lastName: "Oyer",
    age: 23,
    DOB: "3/08/1998",
    phoneNumber: 9093041650,
    address: "214 Longfellow St",
    city: "Sunnyside",
    state: "New York",
    zipCode: 11104,
    allergies: "wheat, fish",
    gender: "Female",
    disabled: false,
    disabled_explanation: null,
    emergencyContact_firstName: "Christel",
    emergencyContact_lastName: "Fearn",
    contactRelationship: "mother",
    relationship_address: "9505 Del Monte St.",
    relationship_city: "Romulus",
    relationship_state: "Michigan",
    relationship_zipCode: 48174,
    drug_choice: "codeine",
    years_used: 7,
    sobriety_length: 1,
    hasDetoxed: true,
    center_id: 1,
    counselor_id: 1,
  },
  {
    resident_firstName: "Windy",
    resident_lastName: "Fearn",
    age: 32,
    DOB: "3/08/1989",
    phoneNumber: 9093041650,
    address: "214 Longfellow St",
    city: "Sunnyside",
    state: "New York",
    zipCode: 11104,
    allergies: "wheat, fish",
    gender: "Female",
    disabled: false,
    disabled_explanation: null,
    emergencyContact_firstName: "Christel",
    emergencyContact_lastName: "Fearn",
    contactRelationship: "mother",
    relationship_address: "9505 Del Monte St.",
    relationship_city: "Romulus",
    relationship_state: "Michigan",
    relationship_zipCode: 48174,
    drug_choice: "codeine",
    years_used: 7,
    sobriety_length: 1,
    hasDetoxed: true,
    center_id: 1,
    counselor_id: 5,
  },
  {
    resident_firstName: "Timika",
    resident_lastName: "Fiske",
    age: 32,
    DOB: "3/08/1989",
    phoneNumber: 9093041650,
    address: "214 Longfellow St",
    city: "Sunnyside",
    state: "New York",
    zipCode: 11104,
    allergies: "wheat, fish",
    gender: "Female",
    disabled: false,
    disabled_explanation: null,
    emergencyContact_firstName: "Christel",
    emergencyContact_lastName: "Fearn",
    contactRelationship: "mother",
    relationship_address: "9505 Del Monte St.",
    relationship_city: "Romulus",
    relationship_state: "Michigan",
    relationship_zipCode: 48174,
    drug_choice: "codeine",
    years_used: 7,
    sobriety_length: 1,
    hasDetoxed: true,
    center_id: 1,
    counselor_id: 3,
  },
  {
    resident_firstName: "Paola",
    resident_lastName: "Bryson",
    age: 32,
    DOB: "3/08/1989",
    phoneNumber: 9093041650,
    address: "214 Longfellow St",
    city: "Sunnyside",
    state: "New York",
    zipCode: 11104,
    allergies: "wheat, fish",
    gender: "Female",
    disabled: false,
    disabled_explanation: null,
    emergencyContact_firstName: "Christel",
    emergencyContact_lastName: "Fearn",
    contactRelationship: "mother",
    relationship_address: "9505 Del Monte St.",
    relationship_city: "Romulus",
    relationship_state: "Michigan",
    relationship_zipCode: 48174,
    drug_choice: "codeine",
    years_used: 7,
    sobriety_length: 1,
    hasDetoxed: true,
    center_id: 2,
    counselor_id: 2,
  },
];

const seedResident = () => Resident.bulkCreate(residentData);

module.exports = seedResident;
