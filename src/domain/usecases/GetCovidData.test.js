/* eslint-disable no-console */
/* eslint-disable no-async-promise-executor */
/* eslint-env node, mocha */

const { expect } = require('chai')
const GetCovidData = require('./GetCovidData')
const Covid = require('../entities/Covid')

const rendaVariavelTest = [
  {
    empresa: 'VX-CONTABILIDADE',
    carteira: '31216568',
    cnpjFundo: '31216568000178',
    nome: 'FIDC XPCE SEC',
    nomeMercado: 'CETIP21',
    tipo: 'Cadastro Pendente',
    codigoCustodia: 'ERFI11',
    emissor: 'VERT',
    dataCompra: '06/21/2019 00:00:00',
    dataEmissao: '10/01/2018 00:00:00',
    dataVencimento: '12/12/2022 00:00:00',
    indexadorA: 'DI1',
    porcentagemIndexadorA: 100,
    porcentagemIndexadorATipo: '%',
    indexadorB: null,
    porcentagemIndexadorB: null,
    porcentagemIndexadorBTipo: '%',
    taxaA: 0,
    taxaB: 6,
    quantidadeLivre: 1423,
    quantidadeBloqueio: 0,
    valorCompra: 1534486.52,
    curvaAtual: 1560030.24,
    mercadoAtual: 1559451.68,
    ateVencimento: 'Não',
  },
  {
    empresa: 'VX-PROCESSAMENTO',
    carteira: '31216568',
    cnpjFundo: '31216568000178',
    nome: 'FIDC XPCE SEC',
    nomeMercado: 'CETIP21',
    tipo: 'Cadastro Pendente',
    codigoCustodia: 'ERFI11',
    emissor: 'VERT',
    dataCompra: '06/21/2019 00:00:00',
    dataEmissao: '10/01/2018 00:00:00',
    dataVencimento: '12/12/2022 00:00:00',
    indexadorA: 'DI1',
    porcentagemIndexadorA: 100,
    porcentagemIndexadorATipo: '%',
    indexadorB: null,
    porcentagemIndexadorB: null,
    porcentagemIndexadorBTipo: '%',
    taxaA: 0,
    taxaB: 6,
    quantidadeLivre: 1423,
    quantidadeBloqueio: 0,
    valorCompra: 1534486.52,
    curvaAtual: 1560030.24,
    mercadoAtual: 1559451.68,
    ateVencimento: 'Não',
  },

].map(x => {
  return new RendaFixa(x)
})

const injection = {
  SinqiaRepository: class {
    // eslint-disable-next-line no-unused-vars
    async listarAtivosRendaFixaPorEmpresaEData(
      cnpjEmpresa,
      cnpjFundo,
      carteira
    ) {
      return rendaVariavelTest
    }

    listarUltimasPosicoesCarteira(cnpjFundo, carteira) {
      return new Date('2020-01-01')
    }
  },
}

const cnpjEmpresa = '13.703.306/0001-56'
const dataCarteira = new Date('01/01/2020')
const cnpjFundo = '27944148000130'
const carteira = '27440'

describe('Informações de Ativos Renda Fixa caso de uso', () => {
  it('Deve retornar os Ativos Renda Fixa procurando por empresa e data', async () => {
    const uc = GetAtivoRendaFixa(injection)
    const ret = await uc.run({
      cnpjEmpresa,
      dataCarteira,
      cnpjFundo,
      carteira,
    })

    logger.info(ret)
    const RendasFixa = ret.ok.rendaFixa

    expect(RendasFixa).to.be.an('array')
    // eslint-disable-next-line no-unused-expressions
    expect(RendasFixa[0] instanceof RendaFixa).to.be.true
    expect(RendasFixa[0].empresa).to.be.an('string')
    expect(RendasFixa[0].carteira).to.be.an('string')
    expect(RendasFixa[0].nome).to.be.an('string')
    expect(RendasFixa[0].nomeMercado).to.be.an('string')
    expect(RendasFixa[0].tipo).to.be.an('string')
    expect(RendasFixa[0].codigoCustodia).to.be.an('string')
    expect(RendasFixa[0].emissor).to.be.an('string')
    expect(RendasFixa[0].dataCompra).to.be.an('string')
    expect(RendasFixa[0].dataEmissao).to.be.an('string')
    expect(RendasFixa[0].dataVencimento).to.be.an('string')
    expect(RendasFixa[0].quantidadeLivre).to.be.an('number')
    expect(RendasFixa[0].valorCompra).to.be.an('number')
    expect(RendasFixa[0].quantidadeBloqueio).to.be.an('number')
    expect(RendasFixa[0].curvaAtual).to.be.an('number')
    expect(RendasFixa[0].mercadoAtual).to.be.an('number')
    expect(RendasFixa[0].ateVencimento).to.be.an('string')
    // eslint-disable-next-line no-unused-expressions
    expect(RendasFixa[0].valid).to.be.true
    // eslint-disable-next-line no-unused-expressions
    expect(ret.isOk).to.be.true
  })

  it('Deve retornar os Ativos Renda Fixa procurando por empresa', async () => {
    const uc = GetAtivoRendaFixa(injection)
    const ret = await uc.run({
      cnpjEmpresa,
      cnpjFundo,
      carteira,
    })

    logger.info(ret)
    const RendasFixa = ret.ok.rendaFixa

    expect(RendasFixa).to.be.an('array')
    // eslint-disable-next-line no-unused-expressions
    expect(RendasFixa[0] instanceof RendaFixa).to.be.true
    expect(RendasFixa[0].empresa).to.be.an('string')
    expect(RendasFixa[0].carteira).to.be.an('string')
    expect(RendasFixa[0].nome).to.be.an('string')
    expect(RendasFixa[0].nomeMercado).to.be.an('string')
    expect(RendasFixa[0].tipo).to.be.an('string')
    expect(RendasFixa[0].codigoCustodia).to.be.an('string')
    expect(RendasFixa[0].emissor).to.be.an('string')
    expect(RendasFixa[0].dataCompra).to.be.an('string')
    expect(RendasFixa[0].dataEmissao).to.be.an('string')
    expect(RendasFixa[0].dataVencimento).to.be.an('string')
    expect(RendasFixa[0].quantidadeLivre).to.be.an('number')
    expect(RendasFixa[0].valorCompra).to.be.an('number')
    expect(RendasFixa[0].quantidadeBloqueio).to.be.an('number')
    expect(RendasFixa[0].curvaAtual).to.be.an('number')
    expect(RendasFixa[0].mercadoAtual).to.be.an('number')
    expect(RendasFixa[0].ateVencimento).to.be.an('string')
    // eslint-disable-next-line no-unused-expressions
    expect(RendasFixa[0].valid).to.be.true
    // eslint-disable-next-line no-unused-expressions
    expect(ret.isOk).to.be.true
  })
})
