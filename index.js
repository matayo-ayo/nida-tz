require('dotenv').config();
const axios = require('axios');
const getNin = async(nin) => {
  try{
    const url = `${process.env.NIDA_TZ}${nin}`;
    const response = await axios.post(url);
    if(response.data.obj.error === ""){
      return response.data.obj.result
    }else{
      return "Incorrect ID"
    }
  } catch (err){
    return err.message
  }
}
module.exports = { getNin };