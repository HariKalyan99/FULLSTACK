const { getServer, getUsers, getUserByUuid, welcome, getSearch } = require('../controllers/users.controllers');
const getSearchQuery = require('../middlewares/users.middlewares');

const userRoute = require('express').Router();

userRoute.get("/", welcome)
userRoute.get("/server", getServer)
userRoute.get("/users", getUsers)
userRoute.get("/users/search",getSearchQuery,  getSearch)
userRoute.get("/users/:uuid", getUserByUuid)


module.exports = userRoute;