const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const Order = require('../models/Order');
const Client = require('../models/Client');
const mongoose = require("mongoose");

const router = Router();

router.post('/create', async (req, res) => {
  try {
    const {login, mark, yearRelese, typeEngine, gosnumber, problemText, dateRegistr} = req.body;

    const auto = {
      yearRelese: yearRelese, mark: mark, typeEngine: typeEngine, gosnumber: gosnumber
    }

    const clientFind = await Client.findOne({login: login});

    const client = new Client({
      fio: clientFind.fio, phone: clientFind.phone, login: login, password: clientFind.password
    })

    const order = new Order({
      _id: new mongoose.Types.ObjectId(),
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
        return res.status(400).json({message: 'Не удалось зарегистровать заказ (err save)'})
      } else return res.status(200).json({message: 'Регистрация заказа прошла успешно'})
    })

  } catch (err) {
    return res.status(500).json({message: 'Что-то пошло не так'})
  }
});

router.get('/get-orders', async (req, res) => {
  try {
    const orders = await Order.find({})

    if (orders.length === 0) return res.status(400).json({message: 'Данные отсуствуют'})

    res.status(200).json({data: orders});
  } catch (err) {
    res.status(500).json('Что то пошло нет так: ' + err);
  }
});


router.post('/get-orders-login', async (req, res) => {
  try {
    const {login} = req.body;
    const orders = await Order.find({'client.login': login})

    if (orders.length === 0) return res.status(400).json({message: 'Заказов пока что нет'})

    res.status(200).json({data: orders});
  } catch (err) {
    res.status(500).json({message: 'Что то пошло нет так: ' + err});
  }
});

router.post('/get-orders-master-login', async (req, res) => {
  try {
    const {login} = req.body;
    const orders = await Order.find({'master.login': login})

    if (orders.length === 0) return res.status(400).json({message: 'Заказов пока что нет'})

    res.status(200).json({data: orders});
  } catch (err) {
    res.status(500).json({message: 'Что то пошло нет так: ' + err});
  }
});

router.put("/update-master-cost", async (req, res) => {
  try {
    const {master, id, cost, status} = req.body;
    const order = await Order.findById(id)

    if (order === null) {
      return res.status(400).json({message: "Заказа с id" + id + " не найден"});
    }

    order.master = {
      fio: master.fio,
      email: master.email,
      login: master.login,
    }

    order.cost = cost;
    order.status = status;

    await order.save(function (err) {
      if (err)
        return res.status(400).json({message: "Не удалось обновить данные заказа"})
      else
        return res.status(200).json({message: "Заказ успешно обновлен"});
    })

  } catch (err) {
    res.status(500).json({message: "Что-то пошло не так: " + err})
  }
})

router.put("/update-payment", async (req, res) => {
  try {
    const {id} = req.body;
    console.log(req.body)
    const order = await Order.findById(id);

    if (!order) {
      return res.status(400).json({message: "Заказа с id" + id + " не найден"});
    }

    order.payment = '1'

    await order.save(function (err) {
      if (err)
        return res.status(400).json({message: "Не удалось обновить данные заказа"})
      else
        return res.status(200).json({message: "Заказ успешно обновлен"});
    })

  } catch (err) {
    res.status(500).json({message: "Что-то пошло не так: " + err})
  }
})


module.exports = router;