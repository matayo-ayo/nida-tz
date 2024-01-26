const axios = require('axios');
const config = require('config');

const getNin = async(nin) => {
  try{
    const apiUrl = config.get('NIDA_TZ');
    const url = `${apiUrl}${nin}`;
    const response = await axios.post(url);
    if(response.data.obj.error === ""){
      return response.data.obj.result;
    }else{
      return "Not found"
    }
  } catch (err){
    return err.message
  }
}

module.exports = { getNin };