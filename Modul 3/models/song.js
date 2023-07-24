const moongose = require("mongoose");

const songSchema = moongose.Schema({
    title:{
        required: true,
        type: String
    },
    artist:{
        required: true,
        type: String
    },
    played:{
        required: true,
        type: Number
    }
})

module.exports = moongose.model('Songs', songSchema);