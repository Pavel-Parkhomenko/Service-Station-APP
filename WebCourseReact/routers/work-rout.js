const {Router} = require('express')
const Work = require('../models/Work')
const {check, validationResult} = require('express-validator')

const router = Router()

router.post('/add-work', 
[check('cost', 'Неверно введена стоимость').isNumeric()], 
async(req, res) => {

})