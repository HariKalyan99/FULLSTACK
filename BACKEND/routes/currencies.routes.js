const { welcomeCurrency, getCurrencyServer, getCurrencies, getCurrenciesById, postCurrency } = require('../controllers/currencies.controllers');

const currencyRoute = require('express').Router();


currencyRoute.get("/", welcomeCurrency)
currencyRoute.get("/server", getCurrencyServer)
currencyRoute.get("/currencies", getCurrencies)
currencyRoute.post("/currencies/new", postCurrency)
currencyRoute.get("/currencies/:id", getCurrenciesById)



module.exports = currencyRoute;