const axios = require('axios');

let url = 'https://rebrickable.com/api/v3/lego/';
let authorization = { headers: { 'Authorization': process.env.API_TOKEN }};

const Parse = {
  getAll: (endpoint, params = '') => {
    return axios.get(`${url}${endpoint}${params}`, authorization)
  }
}

// export default Parse;
module.exports.Parse = Parse;