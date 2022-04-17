const {Schema, model} = require('mongoose')
const mongoose = require("mongoose");

const schema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, required: false},
    cost: {type: Number, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true}
}, { versionKey: false })

module.exports = model('works', schema);
