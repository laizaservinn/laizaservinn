const mongoose = require('mongoose');
const {format: prettyFormat} = require('pretty-format');

const PostSchema = new mongoose.Schema({ title: String, content: String, tags: [String], createdAt: { type: Date, default: Date.now } });
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

console.log("mongoose",prettyFormat(mongoose.connection.readyState));
module.exports = mongoose.model('Post', PostSchema);