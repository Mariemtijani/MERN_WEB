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
   image: {
        data: Buffer,
        contentType: String
    },
    price : {
        type : Number,
        required : true
    },
    deliveryTime : {
        type : Number,
        required : true
    },
    approved : {
        type : Boolean
    }
})

module.exports = mongoose.model('Service' , serviceSchema);
