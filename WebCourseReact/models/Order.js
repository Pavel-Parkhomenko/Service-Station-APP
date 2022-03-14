const { Schema, model } = require('mongoose')

const schema = new Schema({
    auto: {
        yearRelese: { type: String, required: true },
        mark: { type: String, required: true },
        typeEngine: { type: String, required: true },
        gosnumber: { type: String, required: true },
    },
    client: {
        fio: { type: String, required: true },
        phone: { type: String, required: true },
        login: { type: String, required: true },
    },
    dateRegistr: { type: String, required: true },
    master: {
        fio: { type: String},
        login: { type: String},
    },
    payment: { type: String, required: true },
    status: { type: String, required: true },
    problemText: { type: String, required: true },
    cost: { type: String},

}, { versionKey: false })

module.exports = model('orders', schema);