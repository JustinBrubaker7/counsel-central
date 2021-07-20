import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all posts
  getUser: function () {
    return axios.get("https://randomuser.me/api/");
  },

  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=10");
  },

  getPoplog: function () {
    return axios.get("https://calm-plains-23222.herokuapp.com/api/get/resident");
  },

  //gets all residents that belong to the couselor | pass in the counselor ID
  getResident: function (id) {
    return axios.get(`https://calm-plains-23222.herokuapp.com/api/get/counselor-residents/${id}`);
  },

  getResidents: function (id) {
    return axios.get(`https://calm-plains-23222.herokuapp.com/api/get/center-residents/${id}`);
  },

  //get notes by resident ID
  getNotes: function (id) {
    return axios.get(`https://calm-plains-23222.herokuapp.com/api/get/resident-notes/${id}`);
  },

  //getss all counselors at a given center by ID
  getCounselors: function (id) {
    return axios.get(`https://calm-plains-23222.herokuapp.com/api/get/center-counselors/${id}`);
  },
  getSingleResident: function (id) {
    return axios.get(`https://calm-plains-23222.herokuapp.com/api/get/resident/${id}`);
  },

  getCaseload: function () {
    return axios.get("/api/caseload");
  },

  addCounselor: function () {
    return axios.get("/api/admin/create");
  },

  removeCounselor: function () {
    return axios.get("/api/admin/remove");
  },

  addResident: function () {
    return axios.get("/api/counselor/create");
  },

  removeResident: function () {
    return axios.get("/api/counselor/remove");
  },
  addNote: function () {
    return axios.get("api/note/create");
  },

  getEvents: function (id, centerID) {
    return axios.get(`https://calm-plains-23222.herokuapp.com/api/date/get/${id}/${centerID}`);
  },
};
