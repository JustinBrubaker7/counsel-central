import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all posts
  getUser: function() {
    return axios.get("https://randomuser.me/api/");
  },

  getUsers: function(){
    return axios.get('https://randomuser.me/api/?results=10')
  }
};