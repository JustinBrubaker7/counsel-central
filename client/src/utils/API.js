import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all posts
  getUser: function() {
    return axios.get("https://randomuser.me/api/");
  },

  getUsers: function(){
    return axios.get('https://randomuser.me/api/?results=10')
  },

  getPoplog: function(){
    return axios.get('https://counselcentral.org/api/get/resident')
  },
  
  getCaseload: function(){
    return axios.get('https://counselcentral.org/api/caseload')
  },

  getAllCounselors: function(){
    return axios.get('https://counselcentral.org/api/get/counselor')

  },

  addCounselor: function(){
    return axios.get('https://counselcentral.org/api/admin/create')
  },

  removeCounselor: function(){
    return axios.get('https://counselcentral.org/api/admin/remove')
  },

  addResident: function(){
    return axios.get('https://counselcentral.org/api/counselor/create')
  },

  removeResident: function(){
    return axios.get('https://counselcentral.org/api/counselor/remove')
  },
  //addNote: function(){
  //  return axios.get(notes from counsellor route)
  //}

};

