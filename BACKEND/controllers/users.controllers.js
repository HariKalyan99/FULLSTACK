const userInfo = require('../users.json');
const serverInfo = {
    server: "This is a node-http server",
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
}



const welcome = (request, response) => {
    response.send("<h1>Welcome to the node-express server</h1>")
}
const getServer = (request, response) => {
    response.status(200).json({...serverInfo, server: "This is a node-express server for users"});
}

const getUsers = (request, response) => {
    response.status(200).json(userInfo.data)
}

const getUserByUuid =  (request, response) => {
    response.status(200).json(userInfo.data.find(x => x.login.uuid == request.params.uuid));
}

const getSearch = (request, response) => {
    const {gender, age} = request.query;

    if(gender && age){
        return response.status(200).json(userInfo.data.filter(x => x.gender?.toLowerCase() === gender?.toLowerCase() && x.dob.age === Number(age)));
    }
    
    
    if(gender){
        return response.status(200).json(userInfo.data.filter(x => x.gender?.toLowerCase() === gender?.toLowerCase()));
    }

    if(age){
        return response.status(200).json(userInfo.data.filter(x => x.dob.age === Number(age)));
    }
}


module.exports = {welcome, getServer, getUserByUuid, getUsers, getSearch}