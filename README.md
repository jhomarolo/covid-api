# covid-api

![CI build](https://github.com/jhomarolo/covid-api/workflows/CI%20build/badge.svg)  [![codecov](https://codecov.io/gh/jhomarolo/covid-api/branch/master/graph/badge.svg)](https://codecov.io/gh/jhomarolo/covid-api)

### Executando individualmente

1. Entre na pasta do projeto
2. Abra um terminal e execute `npm i` para instalar os pacotes
3. Configure sua string de conexão e se necessário importe os arquivos para sua base através do script de importação python dentro da pasta data
4. A fonte dos dados vem do seguinte repositório: https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series
5. Execute depois `npm start`
6. No console deve aparecer com o nome do projeto e a frase `Server listening on port 8080` (é possível que de acordo com as configurações do seu computador ele esteja como `localhost:8080` ou `127.0.0.1:8080`)
7. A Rota principal está em `/covid`


## How to contribute

If you would like to help contribute to this **GitHub** Action, please see [CONTRIBUTING](https://github.com/jhomarolo/covid-api/blob/master/.github/CONTRIBUTING.md)

---

### License

- [MIT License](https://github.com/github/super-linter/blob/master/LICENSE)