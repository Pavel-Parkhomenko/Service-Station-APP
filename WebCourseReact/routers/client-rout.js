const { Router } = require('express');
const Client = require('../models/Client');
const { check, validationResult } = require('express-validator')

const router = Router();

router.get('/get-client-login', async (req, res) => {
    try {
        const { login } = req.body;

        const user = await Client.findOne({ login: login });

        if (!user) {
            return res.status(400).json({ message: 'Такого пользователя не существует' })
        }

        res.status(200).json({ data: user });
    } catch (err) {
        res.status(500).json('Что то пошло нет так: ' + err);
    }
});

router.get('/get-clients', async (req, res) => {
    try {
        const clients = await Client.find();

        if (clients.length === 0) {
            return res.status(400).json({ message: 'Пользователей в бд нет' })
        }

        res.status(200).json({ data: clients });
    } catch (err) {
        res.status(500).json('Что то пошло нет так: ' + err);
    }
});

router.get('/get-feedbacks', async (req, res) => {
    try {
        const clients = await Client.find({});

        if (clients.length === 0) {
            return res.status(400).json({ message: 'Пользователей в бд нет' })
        }

        const feedbacks = clients.filter(c => {
            if(c.feedback) return { id: c._id, fio: c.fio, feedback: c.feedback }
        })

        res.status(200).json({ data: feedbacks });
    } catch (err) {
        res.status(500).json('Что то пошло нет так: ' + err);
    }
});

router.put('/update-feedback', async (req, res) => {
    try {
        const { login, newFeedback } = req.body;
        const client = await Client.findOne({ 'login': login })

        if (client == null)
            return res.status(400).json({ message: 'Клиент не найден' })

        client.feedback = newFeedback;

        await client.save(function (err) {
            if (err) {
                return res.status(400).json({ message: 'Не удалось обновить или добавить отзыв (err save)' })
            }
            else
                return res.status(200).json({ message: 'Отзыв успешно добавлен' })
        })
    } catch (err) {
        res.status(500).json('Что то пошло нет так: ' + err);
    }
});

router.put('/delete-feedback', [
    check("id", "Неверный индентификатор").isLength({min: 1, max: 50})
], async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Индентификатор имел не верный формат"
            })
        }
        let {id} = req.body;
        const client = await Client.findOne({ _id: id })
        client.feedback = null;
        await client.save(function (err) {
            if (err) {
                return res.status(400).json({ message: 'Не удалось удалить (err save)' })
            }
            else
                return res.status(200).json({ message: 'Отзыв успешно удален' })
        })
        return res.status(200).json({message: "Отзыв успешно удален"})
    } catch (err) {
        return res.status(400).json({message: "Отзыв не была удален"})
    }
})

module.exports = router;