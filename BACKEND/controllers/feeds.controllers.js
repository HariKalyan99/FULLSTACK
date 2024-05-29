const FeedService = require("../service/feed.service");
const Feeds = new FeedService();



const welcomeFeeds = (request, response) => {
    response.send("<h1>Welcome to mongo server</h1>")
}

const getFeeds = async(request, response) => {
    try{
        const result = await Feeds.readFeeds();
        return response.status(200).json(result);
    }catch(error){
        return response.status(500).json({message: error.message})
    }
}

module.exports = {welcomeFeeds, getFeeds};