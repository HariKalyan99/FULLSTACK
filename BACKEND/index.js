const mongoose = require('mongoose');
const DB_URI = "mongodb://localhost:27017/feeds"
const http = require('http');
const express = require('express');
const port1 = 8081;
const currencyInfo = require('./currencies.json');
const currencyRoute = require('./routes/currencies.routes');
const userRoute = require('./routes/users.routes');
const feedRoutes = require('./routes/feed.routes');
const serverInfo = {
    server: "This is a node-http server",
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
}

const server = http.createServer((request, response) => {
    if(request.method == "GET"){
        const id = request.url.split("/")[2];
        const matchId = currencyInfo.data.find(x => x.id?.toLowerCase() === id?.toLowerCase())
        if(request.url === "/"){
            response.write("<h1>Welcome to the node http server</h1>");
            response.end();
        }else if(request.url === "/server"){
            response.writeHead(200, {'Content-type': 'application/json'});
            response.write(JSON.stringify(serverInfo));
            response.end();
        }else if(request.url === "/currencies"){
            response.writeHead(200, {'Content-type': 'application/json'});
            response.write(JSON.stringify(currencyInfo.data));
            response.end();
        }else if(id){
            response.writeHead(200, {'Content-type': 'application/json'});
            response.write(JSON.stringify(matchId));
            response.end();
        }
    }else if (request.method === "POST"){
        let body = "";
        request.on("error", (error) => {
            console.log('Error', error);
        }).on("data", (chunk) => {
            body+=chunk;
        }).on("end", () => {
            body = JSON.parse(body);
            currencyInfo.data = [body, ...currencyInfo.data];
            response.writeHead(200, {'Content-type': 'application/json'});
            response.write(JSON.stringify(currencyInfo));
            response.end();
        })
    }
})


//user server

const userExpress = express();
const port2 = 8082
userExpress.use("/", userRoute)


//currency server
const currencyExpress = express();
const port3 = 8083;
currencyExpress.use(express.json())
currencyExpress.use("/", currencyRoute)





const app = express();
const port4 = 8084;

app.use("/", feedRoutes);


mongoose.connect(DB_URI).then(() => {
    console.log("Connection successfully connected to mongoose feed DB");
    server.listen(port1, () => {
        console.log(`Listening on port: ${port1}`);
    })
    
    userExpress.listen(port2, () => {
        console.log(`Listening on port: ${port2}`);
    })
    
    currencyExpress.listen(port3, () => {
        console.log(`Listening on port: ${port3}`);
    })
    
    app.listen(port4, () => {
        console.log(`Listening on port: ${port4}`)
    })
}).catch = (error) => {
    console.log(`Connection unsuccessfull`, error)
}


