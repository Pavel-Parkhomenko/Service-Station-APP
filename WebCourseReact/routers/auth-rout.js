const { Router } = require('express');
const User = require('../models/User');

const router = Router();

// app.get('/login', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// });

router.post('/login', async (req, res) => {
    console.log("Body: ", req.body)

    const {login, password} = req.body;

    let condidat = new User({
        login: login,
        password: password,
        rank: "client"
    })

    await condidat.save(function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("save");
    })
}); 

router.post('/registr', async (req, res) => {
    console.log("Body: ", req.body)

    const {login, password} = req.body;

    let condidat = new User({
        login: login,
        password: password,
        rank: "client"
    })

    await condidat.save(function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("save");
    })
}); 

module.exports = router;