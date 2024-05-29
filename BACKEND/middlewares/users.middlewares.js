const validateSearchQuery = require("../validators/users.validators");

const getSearchQuery = (request, response, next) => {
    const {gender, age} = request.query;

    const error = validateSearchQuery(gender, age);

    if(error){
        return response.status(404).json({message: error.message})
    }

    next();
}


module.exports = getSearchQuery;