const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true, unique: true},
    models: {type: Array, required: true },
}, { versionKey: false });

module.exports = model('marks', schema);