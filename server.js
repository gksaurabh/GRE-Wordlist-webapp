const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const config = require('./db/config.js');

app.use(express.static(path.join(__dirname + '/public')));

let WordList = require("./db/models/wordsSchema.js");
let DifficultWordList = require("./db/models/difficultWordsSchema.js");

const PORT = process.env.PORT || 8000;

app.locals.wordList = require('./data-and-scripts/words.json');
app.locals.difficultWordList = require('./data-and-scripts/words-difficulty.json');

const appRouter = require("./routes/routes.js");

let db;
app.locals.db = db;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req,_,next)=> {
    console.log(`${req.method}: ${req.url}`);
    if (Object.keys(req.body).length > 0){
        console.log('Body:');
        console.log(req.body);
    }
    next();
});

app.use("/", appRouter);
//Start the connection to the database
mongoose.connect(config.db.host, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default Mongoose connection (can then be shared across multiple files)
db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    //We are connected
    console.log("Connected to the database...");

    //insert words into database
    WordList.find({}, function(err, result){
        if(err){console.log(err);}
        else{
           // console.log("Result :", result);
            if(result.length === 0){
                console.log("Intializing the wordList collection...");

                WordList.insertMany(app.locals.wordList, function(err, result){
                    if(err){
                        console.log(err);
                        return;
                    }
                    
                });
            }
        }
    });

    DifficultWordList.find({}, function(err, result){
        if(err){console.log(err);}
        else{
            //console.log("Result :", result);
            if(result.length === 0){
                console.log("Intializing the difficultWordList collection...");

                DifficultWordList.insertMany(app.locals.difficultWordList, function(err, result){
                    if(err){
                        console.log(err);
                        return;
                    }
                    else{
                        
                    }
                });
            }
            app.listen(PORT, ()=> {
                console.log(`Server listening on http://localhost:${PORT}`)
            });
        }
    });

});

// terminates a connection to the database when the node application finishes
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected through app termination');
      process.exit(0);
    });
  });