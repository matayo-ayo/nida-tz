require('dotenv').config();
const axios = require('axios');

const getNin = async (nin, method) => {
    try {
        let response, data
        const url = `${process.env.NIDA_TZ}${nin}`;

        if (method === 'get') { response = await axios.get(url) }
        if (method === 'post') { response = await axios.post(url) }
        else { return `Undefined method` }
        data = response.data;
        return (
            data?.obj?.result?.NIN === nin ||
            data?.data?.item?.nin === nin ||
            (data && data.hasOwnProperty(nin))
        ) ? data.obj?.result || data : "User not found"
    }
    catch (err) {
        return `Failed to get data from ${nin} with ${method} method: ${err.message}`;
    }
}

module.exports = { getNin }