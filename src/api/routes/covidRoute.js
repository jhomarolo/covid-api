const { Router } = require('express')
const CovidController = require('../controllers/CovidController')

const routes = new Router()
/**
 * @swagger
 * /rendaFixa:
 *  get:
 *    tags: [Ativos]
 *    description:
 *    responses:
 *      '200':
 *        description: Obteve as classes de renda fixa com sucesso, caso resposta estiver vazia, não foram encontrados nenhum registro
 *    parameters:
 *         - name: cnpjEmpresa
 *           in: query
 *           description: identificador da empresa
 *           required: true
 *           schema:
 *             type: string
 *             format: string
 *         - name: dataCarteira
 *           in: query
 *           description: Filtro por data da disponibilidade
 *           required: false
 *           schema:
 *             type: date
 *             format: date
 *         - name: cnpjFundo
 *           in: query
 *           description: identificador do fundo
 *           required: true
 *           schema:
 *             type: string
 *             format: xxxxxxxxxxx
 *         - name: carteira
 *           in: query
 *           description: identificador da carteira do fundo
 *           required: true
 *           schema:
 *             type: string
 *             format: xxxxx
 */
routes.get('/covid', CovidController.GetCovidData)

module.exports = routes
