const {Schema, model} = require('mongoose')

const schems = new Schema({

}, { versionKey: false })

/*


{
    "_id": {
        "$oid": "621952cebc5d4a6a1c6989d4"
    },
    "auto": {
        "yearRelese": "2000",
        "mark": "Lada",
        "typeEngine": "дизель",
        "gosnumber": "AB 9704-7"
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
    "problemText": "что-то стучит"
}


*/