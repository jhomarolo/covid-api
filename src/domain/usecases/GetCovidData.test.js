/* eslint-disable no-console */
/* eslint-disable no-async-promise-executor */
/* eslint-env node, mocha */

const assert = require("assert")
const GetCovidData = require('./GetCovidData')
const Covid = require('../entities/Covid')

describe("List Covid-19 data from source", () => {

  it("Should Return Covid data from repo", async () => {
    // Given

    const country = "Barbados"

    var dataObjectArray = 
     [{"country":"Barbados","deaths":[{"date":"2020-01-22T00:00:00.000Z","quantity":0},{"date":"2020-01-23T00:00:00.000Z","quantity":0},{"date":"2020-01-24T00:00:00.000Z","quantity":0},{"date":"2020-01-25T00:00:00.000Z","quantity":0},{"date":"2020-01-26T00:00:00.000Z","quantity":0},{"date":"2020-01-27T00:00:00.000Z","quantity":0},{"date":"2020-01-28T00:00:00.000Z","quantity":0},{"date":"2020-01-29T00:00:00.000Z","quantity":0},{"date":"2020-01-30T00:00:00.000Z","quantity":0},{"date":"2020-01-31T00:00:00.000Z","quantity":0},{"date":"2020-02-01T00:00:00.000Z","quantity":0},{"date":"2020-02-02T00:00:00.000Z","quantity":0},{"date":"2020-02-03T00:00:00.000Z","quantity":0},{"date":"2020-02-04T00:00:00.000Z","quantity":0},{"date":"2020-02-05T00:00:00.000Z","quantity":0},{"date":"2020-02-06T00:00:00.000Z","quantity":0},{"date":"2020-02-07T00:00:00.000Z","quantity":0},{"date":"2020-02-08T00:00:00.000Z","quantity":0},{"date":"2020-02-09T00:00:00.000Z","quantity":0},{"date":"2020-02-10T00:00:00.000Z","quantity":0},{"date":"2020-02-11T00:00:00.000Z","quantity":0},{"date":"2020-02-12T00:00:00.000Z","quantity":0},{"date":"2020-02-13T00:00:00.000Z","quantity":0},{"date":"2020-02-14T00:00:00.000Z","quantity":0},{"date":"2020-02-15T00:00:00.000Z","quantity":0},{"date":"2020-02-16T00:00:00.000Z","quantity":0},{"date":"2020-02-17T00:00:00.000Z","quantity":0},{"date":"2020-02-18T00:00:00.000Z","quantity":0},{"date":"2020-02-19T00:00:00.000Z","quantity":0},{"date":"2020-02-20T00:00:00.000Z","quantity":0},{"date":"2020-02-21T00:00:00.000Z","quantity":0},{"date":"2020-02-22T00:00:00.000Z","quantity":0},{"date":"2020-02-23T00:00:00.000Z","quantity":0},{"date":"2020-02-24T00:00:00.000Z","quantity":0},{"date":"2020-02-25T00:00:00.000Z","quantity":0},{"date":"2020-02-26T00:00:00.000Z","quantity":0},{"date":"2020-02-27T00:00:00.000Z","quantity":0},{"date":"2020-02-28T00:00:00.000Z","quantity":0},{"date":"2020-02-29T00:00:00.000Z","quantity":0},{"date":"2020-03-01T00:00:00.000Z","quantity":0},{"date":"2020-03-02T00:00:00.000Z","quantity":0},{"date":"2020-03-03T00:00:00.000Z","quantity":0},{"date":"2020-03-04T00:00:00.000Z","quantity":0},{"date":"2020-03-05T00:00:00.000Z","quantity":0},{"date":"2020-03-06T00:00:00.000Z","quantity":0},{"date":"2020-03-07T00:00:00.000Z","quantity":0},{"date":"2020-03-08T00:00:00.000Z","quantity":0},{"date":"2020-03-09T00:00:00.000Z","quantity":0},{"date":"2020-03-10T00:00:00.000Z","quantity":0},{"date":"2020-03-11T00:00:00.000Z","quantity":0},{"date":"2020-03-12T00:00:00.000Z","quantity":0},{"date":"2020-03-13T00:00:00.000Z","quantity":0},{"date":"2020-03-14T00:00:00.000Z","quantity":0},{"date":"2020-03-15T00:00:00.000Z","quantity":0},{"date":"2020-03-16T00:00:00.000Z","quantity":0},{"date":"2020-03-17T00:00:00.000Z","quantity":0},{"date":"2020-03-18T00:00:00.000Z","quantity":0},{"date":"2020-03-19T00:00:00.000Z","quantity":0},{"date":"2020-03-20T00:00:00.000Z","quantity":0},{"date":"2020-03-21T00:00:00.000Z","quantity":0},{"date":"2020-03-22T00:00:00.000Z","quantity":0},{"date":"2020-03-23T00:00:00.000Z","quantity":0},{"date":"2020-03-24T00:00:00.000Z","quantity":0},{"date":"2020-03-25T00:00:00.000Z","quantity":0},{"date":"2020-03-26T00:00:00.000Z","quantity":0},{"date":"2020-03-27T00:00:00.000Z","quantity":0},{"date":"2020-03-28T00:00:00.000Z","quantity":0},{"date":"2020-03-29T00:00:00.000Z","quantity":0},{"date":"2020-03-30T00:00:00.000Z","quantity":0},{"date":"2020-03-31T00:00:00.000Z","quantity":0},{"date":"2020-04-01T00:00:00.000Z","quantity":0},{"date":"2020-04-02T00:00:00.000Z","quantity":0},{"date":"2020-04-03T00:00:00.000Z","quantity":0},{"date":"2020-04-04T00:00:00.000Z","quantity":0},{"date":"2020-04-05T00:00:00.000Z","quantity":1},{"date":"2020-04-06T00:00:00.000Z","quantity":2},{"date":"2020-04-07T00:00:00.000Z","quantity":3},{"date":"2020-04-08T00:00:00.000Z","quantity":3},{"date":"2020-04-09T00:00:00.000Z","quantity":3},{"date":"2020-04-10T00:00:00.000Z","quantity":4},{"date":"2020-04-11T00:00:00.000Z","quantity":4},{"date":"2020-04-12T00:00:00.000Z","quantity":4},{"date":"2020-04-13T00:00:00.000Z","quantity":4},{"date":"2020-04-14T00:00:00.000Z","quantity":4},{"date":"2020-04-15T00:00:00.000Z","quantity":5},{"date":"2020-04-16T00:00:00.000Z","quantity":5},{"date":"2020-04-17T00:00:00.000Z","quantity":5},{"date":"2020-04-18T00:00:00.000Z","quantity":5},{"date":"2020-04-19T00:00:00.000Z","quantity":5},{"date":"2020-04-20T00:00:00.000Z","quantity":5},{"date":"2020-04-21T00:00:00.000Z","quantity":5},{"date":"2020-04-22T00:00:00.000Z","quantity":5},{"date":"2020-04-23T00:00:00.000Z","quantity":6},{"date":"2020-04-24T00:00:00.000Z","quantity":6},{"date":"2020-04-25T00:00:00.000Z","quantity":6},{"date":"2020-04-26T00:00:00.000Z","quantity":6},{"date":"2020-04-27T00:00:00.000Z","quantity":6},{"date":"2020-04-28T00:00:00.000Z","quantity":6},{"date":"2020-04-29T00:00:00.000Z","quantity":7},{"date":"2020-04-30T00:00:00.000Z","quantity":7},{"date":"2020-05-01T00:00:00.000Z","quantity":7},{"date":"2020-05-02T00:00:00.000Z","quantity":7},{"date":"2020-05-03T00:00:00.000Z","quantity":7},{"date":"2020-05-04T00:00:00.000Z","quantity":7},{"date":"2020-05-05T00:00:00.000Z","quantity":7},{"date":"2020-05-06T00:00:00.000Z","quantity":7},{"date":"2020-05-07T00:00:00.000Z","quantity":7},{"date":"2020-05-08T00:00:00.000Z","quantity":7},{"date":"2020-05-09T00:00:00.000Z","quantity":7},{"date":"2020-05-10T00:00:00.000Z","quantity":7},{"date":"2020-05-11T00:00:00.000Z","quantity":7},{"date":"2020-05-12T00:00:00.000Z","quantity":7},{"date":"2020-05-13T00:00:00.000Z","quantity":7},{"date":"2020-05-14T00:00:00.000Z","quantity":7},{"date":"2020-05-15T00:00:00.000Z","quantity":7},{"date":"2020-05-16T00:00:00.000Z","quantity":7},{"date":"2020-05-17T00:00:00.000Z","quantity":7},{"date":"2020-05-18T00:00:00.000Z","quantity":7},{"date":"2020-05-19T00:00:00.000Z","quantity":7},{"date":"2020-05-20T00:00:00.000Z","quantity":7},{"date":"2020-05-21T00:00:00.000Z","quantity":7},{"date":"2020-05-22T00:00:00.000Z","quantity":7},{"date":"2020-05-23T00:00:00.000Z","quantity":7},{"date":"2020-05-24T00:00:00.000Z","quantity":7},{"date":"2020-05-25T00:00:00.000Z","quantity":7},{"date":"2020-05-26T00:00:00.000Z","quantity":7},{"date":"2020-05-27T00:00:00.000Z","quantity":7},{"date":"2020-05-28T00:00:00.000Z","quantity":7},{"date":"2020-05-29T00:00:00.000Z","quantity":7},{"date":"2020-05-30T00:00:00.000Z","quantity":7},{"date":"2020-05-31T00:00:00.000Z","quantity":7},{"date":"2020-06-01T00:00:00.000Z","quantity":7},{"date":"2020-06-02T00:00:00.000Z","quantity":7},{"date":"2020-06-03T00:00:00.000Z","quantity":7},{"date":"2020-06-04T00:00:00.000Z","quantity":7},{"date":"2020-06-05T00:00:00.000Z","quantity":7}],"geo":{"type":"Point","coordinates":["13.1939","-59.5432"]},"state":""}]
    

    const injection = {
      CovidRepository: class {
        getCovidData(country) {
          return dataObjectArray
        }
      }
    }

    // When
    const uc = GetCovidData(injection)
    const ret = await uc.run({ country: country })    

    // Then
    assert.ok(ret.isOk)
    assert.deepEqual(
      ret.ok.covid[0].country,
      country
    )
  })
})
