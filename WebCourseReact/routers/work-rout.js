const {Router} = require('express')
const Work = require('../models/Work')

const router = Router()

// router.post('/add-work', 
// [check('cost', 'Неверно введена стоимость').isNumeric()], 
// async(req, res) => {

// })

router.get('/get-works', async(req, res) => {
    const works = await Work.find({});
    if(works.length === 0)
        return res.status(400).json({message: 'Данные в базе данных отсуствуют'})
    return res.status(200).json({works: works})
})

module.exports = router;