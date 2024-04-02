const fetcher = require('./lib/nida-tz')

module.exports = {
  nidaData: async function (nin) {
    try {
      return await fetcher.getNin(nin)
    }
    catch (err) {
      return err.message
    }
  }
}