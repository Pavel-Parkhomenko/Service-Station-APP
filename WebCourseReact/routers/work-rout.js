const {Router} = require('express')
const Work = require('../models/Work')
const {check, validationResult} = require('express-validator')

const router = Router()

router.get('/get-works', async (req, res) => {
  const works = await Work.find({});
  if (works.length === 0)
    return res.status(400).json({message: 'Данные в базе данных отсуствуют'})
  return res.status(200).json({works: works})
})

router.post("/add-work", [
  check("name", "Неверно введено название").isLength({min: 3, max: 20}),
  check("description", "Неверно введено описание").isLength({min: 5, max: 100}),
  check("cost", "Неверно введена стоимость").isNumeric().isLength({min: 1, max: 10000000})
], async (req, res) => {
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Введены некоректные данные"
      })
    }
    const {name, description, cost} = req.body;

    let condidat = new Work({name: name, description: description, cost: parseFloat(cost)})

    await condidat.save(function (err) {
      if (err) return res.status(400).json({message: "Не удалось сохранить данные"})
      // if (err) return res.status(400)
    })

    return res.status(200).json({message: 'Данные добавлены'})

  } catch (err) {
    return res.status(500).json({message: 'Что то пошло нет так'});
  }
})

router.put("/update-work", async (req, res) => {
  try {
    const {cost, description, name, _id} = req.body;

    const work = await Work.findById(_id);
    if (work === null)
      return res.status(400).json({message: `Услуга с id ${_id} не найдена`})

    work.name = name ?? work.name;
    work.description = description ?? work.description;
    work.cost = cost ?? work.cost;

    await work.save(function (err) {
      if (err) {
        return res.status(400).json({message: 'Не удалось обновить услугу'})
      } else
        return res.status(200).json({message: 'Услуга успешно обновлена'})
    })

  } catch (err) {
    return res.status(500).json({message: "Что-то пошло не так"})
  }
})

router.delete('/delete-work', [
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
    await Work.deleteOne({_id: id});
    return res.status(200).json({message: "Услуга успешно удалена"})
  } catch (err) {
    return res.status(400).json({message: "Услуга не была удалена"})
  }
})

module.exports = router;