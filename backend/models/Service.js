const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    artisanId : {
        type : String,
        required : true
    },
    categoryId : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    deliveryTime : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('Service' , serviceSchema)