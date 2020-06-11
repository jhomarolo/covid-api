const database = require('../../config/database')
const { MongoClient } = require('mongodb')

// covidData
const CovidEntity = require('../../domain/entities/Covid')

const dbname = database.dbname
const mongoConnectionString = database.connectString
const collectionname = database.collection

class CovidRepository {
  async getCovidData(country) {
    try {
      let client = await MongoClient.connect(mongoConnectionString)
      const collection = client.db(dbname).collection(collectionname)

      var covidData = new Array()
      var findStatement = {}
      var getall = {}

      if (country) findStatement.country = country

      getall = await collection
        .find(findStatement, { projection: { _id: 0 } })
        .toArray()

      for (var i = 0, len = getall.length; i < len; i++) {
        covidData.push(CovidEntity.fromJSON(getall[i]))
      }

      return covidData
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = CovidRepository
