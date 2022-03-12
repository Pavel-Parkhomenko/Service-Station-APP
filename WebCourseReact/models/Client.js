const {Schema, model} = require('mongoose');

const schema = new Schema({
    feedback: {type: String},
    fio: {type: String, required: true},
    login: {type: String, required: true, unique: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String}
});

module.exports = model('clients', schema);