// // require functions on user
const request = require("supertest");
const mongoose = require('mongoose');
const app = require('./index');

describe(`test endpoints`, () => {    

  beforeEach(async () => {
    await mongoose.connect(process.env.MONGURI);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  test(`Call entrypoint`, async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200)
    expect(res.text).toBe('This app is running properly')
  });
});
