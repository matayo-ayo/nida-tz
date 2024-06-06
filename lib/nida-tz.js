require('dotenv').config();
const axios = require('axios');

const getNin = async (nin, method) => {
    try {
        let response, data
        const url = `${process.env.NIDA_TZ}${nin}`;
        if (method === 'get') { response = await axios.get(url) }
        if (method === 'post') { response = await axios.post(url) }
        else { return `Method sio sahihi` }
        data = response.data;
        return (
            data?.obj?.result?.NIN === nin ||
            data?.data?.item?.nin === nin ||
            (data && data.hasOwnProperty(nin))
        ) ? data.obj?.result || data : "Mtumiaji hakupatikana"
    }
    catch (err) {
        return `Imeshindwa kupata data za ${nin} kwa kutumia ${method} : ${err.message}`;
    }
}

module.exports = { getNin }