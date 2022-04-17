const request = require('supertest')
const app = require('../../server')

describe('Получить весь список услуг', () => {
  test('get all', async () => {
    const res = await request(app).get('/work/get-works')
    expect(res.status).toEqual(200)
  })
})

let example = {
  name: "lab5", description: "test description for lab 5", cost: 999
}

describe('Добавить новую услугу', () => {
  test('add new', async () => {
    const res = await request(app).post('/work/add-work').send(example)
    expect(res.status).toBe(200)
  })
})

let update = {
  _id: "625c5a2a0573449b2ffc4f22",
  name: "test update api"
}

describe('Обновить данные списка услуг', () => {
  test('update', async () => {
    const res = await request(app).put('/work/update-work').send(update)
    expect(res.status).toEqual(200)
  })
})


describe('Удалить выбранную услугу', () => {
  it('del work', async () => {
    const res = await request(app).delete('/work/delete-work').send({id: "625c5a2a0573449b2ffc4f22"})
    expect(res.status).toEqual(200)
  })
})