const feedModel = require("../models/feeds.model")

class FeedService{
    readFeeds = async() => {
        const result = await feedModel.find(); 
        return result;
    }

}


module.exports = FeedService;