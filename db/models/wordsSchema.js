const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let wordListSchema = Schema({
    word:{
        type: String
        //required: true
    },
    definition:{
        type: String
        //required: true
    }
});

let wordList = mongoose.model('WordList', wordListSchema);
module.exports = wordList;