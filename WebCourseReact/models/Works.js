const {Schema, model} = require('mongoose')

const schema = new Schema({
    cost: {Type: Number, required: true},
    description: {Type: String, required: true}
}, { versionKey: false })

module.exports = model('works', schema);