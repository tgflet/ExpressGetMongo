const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    name: {type: String, 
        required: [true, "Please Enter a Person"], 
        minlength: [2, "Person's name should be at least 2 Characters"]},
    birthYear: Number
}, {timestamps: true});

mongoose.model('Person', PersonSchema);