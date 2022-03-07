const {Schema, model} = require('mongoose')

const schema = new Schema({
    cost: {type: Number, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true}
}, { versionKey: false })

module.exports = model('works', schema);
