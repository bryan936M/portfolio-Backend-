const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    article_image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Post', postSchema);
