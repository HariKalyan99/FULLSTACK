const currencyInfo = require('../currencies.json')
const serverInfo = {
    server: "This is a node-http server",
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
}

const welcomeCurrency = (request, response) => {
    response.send("<h1>Welcome to the node-express server</h1>")
}
const getCurrencyServer = (request, response) => {
    response.status(200).json({...serverInfo, server: "This is a node-express server for currencies"});
}
const getCurrencies = (request, response) => {
    response.status(200).json(currencyInfo.data)
}

const getCurrenciesById =  (request, response) => {
    response.status(200).json(currencyInfo.data.find(x => x.id?.toLowerCase() == request.params.id?.toLowerCase()));
}

const postCurrency = (request, response) => {
    const {body} = request;
    currencyInfo.data = [body, ...currencyInfo.data]
    response.status(201).json(currencyInfo.data);
}

module.exports = {welcomeCurrency,
    getCurrencyServer,
    getCurrencies,
    getCurrenciesById, postCurrency}