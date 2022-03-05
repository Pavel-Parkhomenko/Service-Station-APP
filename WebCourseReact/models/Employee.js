const {Schema, model} = require('mongoose');

const schema = new Schema({
    fio: {type: String, required: true},
    login: {type: String, required: true, unique: true},
    privateData: {type: String, required: true}
}, { versionKey: false });

module.exports = model('employee', schema);