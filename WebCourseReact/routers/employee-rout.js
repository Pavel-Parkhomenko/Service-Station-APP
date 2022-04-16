const { Router } = require('express');
const Employee = require('../models/Employee');
const { check, validationResult } = require('express-validator')

const router = Router();

router.get('/get-employee-login', async (req, res) => {
  try {
    const { login } = req.body;

    const empl = await Employee.findOne({ login: login });

    if (!empl) {
      return res.status(400).json({ message: 'Такого сотрудника не существует' })
    }

    res.status(200).json({ data: empl });
  } catch (err) {
    res.status(500).json('Что то пошло нет так: ' + err);
  }
});


router.post('/login-empl',
  [check('login', 'Неверный логин').isLength({ min: 5, max: 15 }),
    check('password', 'Неверный пароль').isLength({ min: 5, max: 15 }),],
  async (req, res) => {
    try {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некоректные данные при входе"
        })
      }

      const { login, password } = req.body;

      const empl = await Employee.findOne({ login: login });
      if (!empl) {
        return res.status(400).json({ message: 'Такого логина не существует' })
      }

      if (password !== empl.password)
        return res.status(400).json({ message: 'Сотрудника с таким паролем не существует' })

      return res.status(200).json({ login: login, password: password, message: 'Вход выполнен успешно' })

    }
    catch (err) {
      return res.status(500).json({ message: 'Что-то пошло не так' })
    }
  });

router.get('/get-employee', async (req, res) => {
  try {
    const empls = await Employee.find();

    if (empls.length === 0) {
      return res.status(400).json({ message: 'Сотрудников в бд нет' })
    }

    res.status(200).json({ data: empls });
  } catch (err) {
    res.status(500).json('Что то пошло нет так: ' + err);
  }
});

router.get('/get-employee-master', async (req, res) => {
  try {
    const empls = await Employee.find({position: "master"});

    if (empls.length === 0) {
      return res.status(400).json({ message: 'Сотрудников в бд нет' })
    }

    res.status(200).json({ data: empls });
  } catch (err) {
    res.status(500).json('Что то пошло нет так: ' + err);
  }
});


module.exports = router;