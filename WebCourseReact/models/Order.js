const {Schema, model} = require('mongoose')

const schems = new Schema({

}, { versionKey: false })

/*


"auto": {
        "yearRelese": "2000",
        "mark": "Lada",
        "typeEngine": "дизель",
        "gosnumber": "AB 9704-7"
    },
    "checker": {
        "fio": "Пархоменко П.Л.",
        "login": "manager"
    },
    "client": {
        "fio": "Суглобов В.В.",
        "phone": "+375291004663",
        "login": "login2",
        "feedback": "все сделали очень хорошо"
    },
    "dateRegistr": "10.05.2022",
    "master": {
        "fio": "Давыдчик О.А.",
        "login": "master1"
    },
    "payment": "0",
    "status": "Completed",
    "works": [{
        "description": "Ремонт двигателя",
        "cost": "1000"
    }]


*/