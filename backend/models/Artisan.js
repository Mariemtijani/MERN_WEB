const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artisanSchema = new Schema({
    firstname : {
        type: String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },
    skill : {
        type : String
    },
    phoneNumber : {
        type : String
    }
});

module.exports = mongoose.model('Artisan', artisanSchema);