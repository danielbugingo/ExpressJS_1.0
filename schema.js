var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var tutorialSchema = new Schema({
    name: {
        type:String,
        require: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    }
    //, {timestamps: true //adds two fields automatically, createdAt, updatedAt}
});

var Tutorials = mongoose.model('tutorials', tutorialSchema);
module.exports = Tutorials;