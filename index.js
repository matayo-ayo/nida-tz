const axios = require('axios');
const config = require('config');

async function getNin(nin) {
  try {
    const apiUrl = config.get('NIDA_TZ');
    const url = `${apiUrl}${nin}`;
    const response = await axios.post(url);
    if (response.data.obj.error === "") {
      return response.data.obj.result;
    } else {
      return "Not found";
    }
  } catch (err) {
    throw new Error(`Error fetching data: ${err.message}`);
  }
}

module.exports = { getNin };