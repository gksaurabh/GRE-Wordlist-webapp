const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let difficultWordListSchema = Schema({
    word:{
        type: String
        //required: true
    },
    definition:{
        type: String
        //required: true
    },
    difficulty:{
        type: String
    }

});

let difficultWordList = mongoose.model('DifficultWordList', difficultWordListSchema);
module.exports = difficultWordList;