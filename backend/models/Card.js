const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema ({
    serviceId : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        
    },
    artisanId : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Card' , cardSchema)