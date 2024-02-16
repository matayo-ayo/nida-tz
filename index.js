require('dotenv').config()
const axios = require('axios')
const getNin = async (nin, request) => {
  try {
    let response
    const url = `${process.env.NIDA_TZ}${nin}`
    if (request === 'post') { response = await axios.post(url) }
    if (request === 'get') { response = await axios.get(url) }
    const data = response.data
    if (data.includes(nin)) { return data }
    else { return "Incorrect ID" }
  }
  catch (err) { return "Failed to get number" }
}
module.exports = { getNin };