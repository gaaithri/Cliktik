// const ex
const mongoose = require('mongoose');

const cliktikSchema = new mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    shares: String,

});

// Collection inside the database 
module.exports = mongoose.model("tiktokVideos", cliktikSchema);