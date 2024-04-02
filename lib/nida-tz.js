require('dotenv').config();
const axios = require('axios');

const getNin = async (nin, method) => {
    try {
        const url = `https://ors.brela.go.tz/um/load/load_nida/${nin}`;
        const response = await axios.get(url)
        const data = response.data
        if(data?.obj?.result?.NIN === nin){
            return data.obj.result
        }else{
            return 'Error'
        }
    }
    catch (err) {
        return `Error: ${err.message}`;
    }
}

module.exports = { getNin }