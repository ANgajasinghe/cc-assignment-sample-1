const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FactorialSchema = new Schema({
    input: Number,
    result: Number
});

const FactorialModel = mongoose.model('Factorial', FactorialSchema);
module.exports = FactorialModel;