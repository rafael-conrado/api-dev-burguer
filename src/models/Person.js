const mongoose = require('../database');

const Person = mongoose.model("Person",{
    name:String,
    salary:Number,
    approved: Boolean
});

module.exports = Person;