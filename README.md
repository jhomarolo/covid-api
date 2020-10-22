# covid-api

![CI build](https://github.com/jhomarolo/covid-api/workflows/CI%20build/badge.svg)  [![codecov](https://codecov.io/gh/jhomarolo/covid-api/branch/master/graph/badge.svg)](https://codecov.io/gh/jhomarolo/covid-api)

### Running individually

1. Enter the project folder
2. Open a terminal and run `npm i` to install the packages
3. Configure your connection string and if necessary import the files to your database using the python import script inside the data folder
4. The data source comes from the following repository: https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series
5. Run after `npm start`
6. In the console it must appear with the project name and the phrase Server listening on port 8080 (it is possible that according to your computer's settings it is localhost: 8080 or 127.0.0.1:8080)
7. The main route is at **/covid**


## How to contribute

If you would like to help contribute to this **GitHub** Action, please see [CONTRIBUTING](https://github.com/jhomarolo/covid-api/blob/master/.github/CONTRIBUTING.md)

---

### License

- [MIT License](https://github.com/github/super-linter/blob/master/LICENSE)