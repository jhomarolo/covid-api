const { Router } = require('express')
const CovidController = require('../controllers/CovidController')

const routes = new Router()
/**
 * @swagger
 * /covid:
 *  get:
 *    tags: [covid]
 *    description:
 *    responses:
 *      '200':
 *        description: Successfully obtained covid data from database, if answer is empty, no records were found
 *    parameters:
 *         - name: country
 *           in: query
 *           description: filter by country
 *           required: true
 *           schema:
 *             type: string
 *             format: xxxxx
 */
routes.get('/covid', CovidController.GetCovidData)

module.exports = routes
