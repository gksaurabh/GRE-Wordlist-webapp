// This module is cached as it has already been loaded
const { log } = require('console');
const express = require('express');
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();

let WordList = require('../db/models/wordsSchema');
let DifficultWordList = require('../db/models/difficultWordsSchema');

app.use(express.json()); // body-parser middleware

router.get('/wordlist', (req,res)=>{
    res.format({
        'application/json': ()=>{
            res.set('Content-Type', 'application/json');
            WordList.find(function(err, result){
                if(result === undefined){
                    res.status(404).send("The word list is empty");
                }
                else if(result !== undefined){
                    res.status(200).set("Content-Type", "application/json").json(result);
                }
                else{
                    res.status(500).send("Unkown error");
                }
            });
        }
    });
});

router.get('/rated-wordlist', (req,res)=>{
    res.format({
        'application/json': ()=>{
            res.set('Content-Type', 'application/json');
            DifficultWordList.find(function(err, result){
                if(result === undefined){
                    res.status(404).send("The word list is empty");
                }
                else if(result !== undefined){
                    res.status(200).set("Content-Type", "application/json").json(result);
                }
                else{
                    res.status(500).send("Unkown error");
                }
            });
        }
    });
});

router.get('/rated-wordlist/generate', (req,res) =>{
    let query = req.query;
    res.format({
        'application/json': ()=>{
            res.set('Content-Type', 'application/json');
            DifficultWordList.find({difficulty: req.query.difficultyLevel,$expr: { $lt: [0.3, {$rand: {}}]}}, function(err, result){
                if(result === undefined){
                    res.status(404).send("No words found");
                }
                else if(result !== undefined){
                    res.status(200).set("Content-Type", "application/json").json(result);
                }
                else{
                    res.status(500).send("Unkown error");
                }
            }).limit(req.query.amount);
        }
    })
});

module.exports = router;