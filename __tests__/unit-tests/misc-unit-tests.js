const request = require('supertest')
const server = require('../../api/server')
const {validInput} = require('../../api/authentication/auth-router')

describe('accessing the authentication router', () =>{

    describe('user is able to register for the app', () => {
        test("testing valid input", async () => {
            let req = {body:{username: 'test', password: 123123}}
            let response = await validInput(req)
            console.log(response)
            expect(response.status).toBe(406)
        })
    })
    
})