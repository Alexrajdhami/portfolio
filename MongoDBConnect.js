const mongoose = require('mongoose');

const MONG_URI = 'mongodb://localhost:27017/Alib';
// const MONG_URI= 'mongodb+srv://nhq:hhqazi2906@cd5006.438bk.mongodb.net/labweek7?retryWrites=true&w=majority';
// const MONG_URI= 'mongodb+srv://nhq:hhqazi2906@cd5006.438bk.mongodb.net/ReplLab?retryWrites=true&w=majority';

mongoose.connect(MONG_URI);

const db = mongoose.connection;

db.on('error', function(err) {
    console.log('Error occurred: ' + err);
});

db.once('connected', function() {
    console.log('Connection is successful to ' + MONG_URI);
});

module.exports = db;
