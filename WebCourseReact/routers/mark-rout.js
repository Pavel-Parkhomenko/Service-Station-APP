const { Router } = require('express');
const Mark = require('../models/Mark');

const router = Router();

// app.get('/login', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// });

router.get('/findall', async (req, res) => {
    try {
        const marks = await Mark.find({})

        if (marks.length == 0)
            return res.status(400).json({ message: 'Данные отсуствуют' })

        res.status(200).json({ data: marks });
    } catch (err) {
        res.status(500).json('Что то пошло нет так: ' + err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const { name } = req.body;

        let condidat = new Mark({
            name: name
        })

        await condidat.save(function (err) {
            if (err) {
                console.log(err);
                return
            }
            console.log("save");
        })
        res.status(201).json({ message: 'Данные добавлены' })
    } catch (err) {
        res.status(500).json('Что то пошло нет так', err);
    }

});

module.exports = router;