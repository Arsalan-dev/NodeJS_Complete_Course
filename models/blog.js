const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true })

// this Blog model wraps the above schema and communicate with db
// The name inside inverted commas is important, it pluralizes 
// it, and then look for that collection when we'll use this model

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;