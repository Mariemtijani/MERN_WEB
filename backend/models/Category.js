const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageData: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Category', categorySchema);
