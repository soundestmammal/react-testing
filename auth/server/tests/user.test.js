const request = require('supertest');
const app = require('../app');
const User = require('../models/user');

const userOne = {
    email: 'root@test.com',
    password: '805tacosFTW!!'
}

test('Should signup a new user', async () => {
    await request(app).post('/signup').send({
        email: 'test@test.com',
        password: 'MyPass777!'
    }).expect('201')
})

test('Should not signup nonexistent user', async () => {
    await request(app).post('/users/login').send({

    })
})