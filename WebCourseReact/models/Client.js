const {Schema, model} = require('mongoose');

const schema = new Schema({
    feedback: {type: String},
    fio: {type: String},
    login: {type: String},
    phone: {type: String},
    password: {type: String},
    email: {type: String}
}, { versionKey: false });

module.exports = model('clients', schema);