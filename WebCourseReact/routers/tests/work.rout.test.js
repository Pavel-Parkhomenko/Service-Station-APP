const request = require('supertest')
const app = require('../../server')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app).get('/work/get-works')
    expect(res.statusCode).toEqual(200)
  })
})