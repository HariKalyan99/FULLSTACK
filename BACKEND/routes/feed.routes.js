const { welcomeFeeds, getFeeds } = require('../controllers/feeds.controllers');

const feedRoutes = require('express').Router();

feedRoutes.get("/", welcomeFeeds);
feedRoutes.get("/feeds", getFeeds);
// feedRoutes.get("/feeds/:title", getFeedsByTitle);
// feedRoutes.post("/feeds/new", postFeeds);


module.exports = feedRoutes;