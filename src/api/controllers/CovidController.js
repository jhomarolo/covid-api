const GetCovidData = require('../../domain/usecases/GetCovidData')

class CovidController {
  async GetCovidData(req, res) {
    try {
      const ucGetCovidData = GetCovidData()
      const parameters = {
        country: req.query.country,
      }

      const caseResponse = await ucGetCovidData.run(parameters)

      if (caseResponse.isErr) {
        logger.error(caseResponse)
        return res.status(400).json(caseResponse.err)
      }

      return res.json(caseResponse.ok.covid)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new CovidController()
