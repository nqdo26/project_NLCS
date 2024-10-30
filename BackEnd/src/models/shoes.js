const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    title: String,
    tag: String,
    price: Number, 
    numberOfColors: Number, 
    colors: [String],
    minSize: Number,
    maxSize: Number, 
    description: String,
});


const Shoes = mongoose.model('shoes', shoesSchema);

module.exports = Shoes;