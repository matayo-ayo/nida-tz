const fetcher = require('./lib/nida-tz')

module.exports = {
  nidaData: async function (nin, method) {
    try {
      if (!(method === 'post' || method === 'get')) {
        throw new Error("Method sio sahihi")
      } else return await fetcher.getNin(nin, method)
    }
    catch (err) {
      return err.message
    }
  }
}