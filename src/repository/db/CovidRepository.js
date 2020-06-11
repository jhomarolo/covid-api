const database = require('../../config/database')
const { MongoClient } = require('mongodb')

// covidData
const Covid = require('../../domain/entities/Covid')

const dbname = database.dbname
const mongoConnectionString = database.connectString
const collectionname = database.collection

class CovidRepository {
  async getCovidData(country) {
    try {
      let client = await MongoClient.connect(mongoConnectionString)
      const db = client.db(dbname)
      const collection = db.collection(collectionname)

      var getall = {}
      if (country)
        getall = await collection
          .find({ country: country }, { projection: { _id: 0 } })
          .toArray()
      else
        getall = await collection
          .find({}, { projection: { _id: 0 } })
          .toArray()
      return getall
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }
}

module.exports = CovidRepository
