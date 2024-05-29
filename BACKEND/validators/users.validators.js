const Joi = require('joi');

const userSearchResults = Joi.object().keys({
    gender: Joi.string().valid('male', 'female'),
    age: Joi.number().integer().min(0).max(100)
}).or('gender', 'age')

const validateSearchQuery = (gender, age) => {
    const {error} = userSearchResults.validate({
        gender, age
    })

    if(error){
        return error;
    }
}

module.exports = validateSearchQuery;