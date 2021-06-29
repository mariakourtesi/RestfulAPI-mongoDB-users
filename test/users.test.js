const app = require('../app') 
const supertest = require('supertest')
const request = supertest(app)
require('../database/db');
const User = require('../model/user');

describe('Create a post request', () => {
    it('Should create a new user', async () => {
        const user = new User({
            name: "Hellen",
            email: "hellen@email.com"
        })

        await user.save();
    })

})



