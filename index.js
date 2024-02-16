require('dotenv').config()
const axios = require('axios')
const getNin = async(nin) => {
  try{
    const url = `${process.env.NIDA_TZ}${nin}`
    const response = await axios.post(url)
    const data = response.data
    if(data.includes(nin)){
      return data
    }else{
      return "Incorrect ID"
    }
  } catch (err){
    return "Failed to get number"
  }
}
module.exports = { getNin };