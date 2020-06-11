const { Ok, usecase, step, ifElse, Err } = require('buchu')
const Covid = require('../entities/Covid')
const CovidRepository = require('../../repository/db/CovidRepository')

const dependency = { Covid, CovidRepository }

const GetCovidData = injection =>
  usecase('List Covid-19 data from source', {
    request: {
      country: String,
    },

    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    'Retrieve data from database': step(async ctx => {
      const Covidrepo = new ctx.di.CovidRepository(ctx.di)
      covid = ctx.ret.covid = await Covidrepo.getCovidData(ctx.req.country)
      return Ok({ covid })
    }),
  })

module.exports = GetCovidData
