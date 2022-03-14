const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const Order = require('../models/Order');
const Client = require('../models/Client');

const router = Router();

router.post('/create',
    async (req, res) => {
        try {
            const { login, mark, yearRelese, typeEngine, gosnumber, problemText, dateRegistr } = req.body;

            const auto = {
                yearRelese: yearRelese,
                mark: mark,
                typeEngine: typeEngine,
                gosnumber: gosnumber
            }

            const clientFind = await Client.findOne({ login: login });

            const client = new Client({
                fio: clientFind.fio,
                phone: clientFind.phone,
                login: login,
                password: clientFind.password
            })

            const order = new Order({
                auto: auto,
                client: client,
                dateRegistr: new Date().toLocaleString(),
                payment: '0',
                status: 'Ожидание',
                problemText: problemText,
            })

            await order.save(function (err) {
                if (err) {
                    console.log(err)
                    return res.status(400).json({ message: 'Не удалось зарегистровать заказ (err save)' })
                }
                else
                    return res.status(200).json({ message: 'Регистрация заказа прошла успешно' })
            })

        }
        catch (err) {
            return res.status(500).json({ message: 'Что-то пошло не так' })
        }
    });

router.get('/get-orders', async (req, res) => {
    try {
        const orders = await Order.find({})

        if (orders.length == 0)
            return res.status(400).json({ message: 'Данные отсуствуют' })

        res.status(200).json({ data: orders });
    } catch (err) {
        res.status(500).json('Что то пошло нет так: ' + err);
    }
});

module.exports = router;