const request = require('supertest')
const server = require('../../api/server')
const db = require('../../database/dbConfig')

test('should be the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

describe('accessing the authentication router', () =>{

    beforeEach(async () => {
        await db('users').truncate()
      })

    describe('user is able to register for the app', () => {
        it('should return an OK status code from the register route', async () => {
            const expectedStatusCode = 200;
            const response = await request(server)
            .post('/api/auth/register')
            .send({username: "bob", password: "burger"});
            expect(response.status).toEqual(expectedStatusCode);
          });
      
          it('should return a JSON object from the register route', async () => {
            const response = await request(server)
            .post('/api/auth/register');
            expect(response.type).toEqual('application/json');
          });

    })
    
    describe('user is able to register for the app', () => {
        it('should return an OK status code from the login route', async () => {
            await request(server)
            .post('/api/auth/register')
            .send({username: "bob", password: "burger"});
      
            const expectedStatusCode = 200;
      
            const response = await request(server)
            .post('/api/auth/login').send({username: "bob", password: "burger"});
            expect(response.status).toEqual(expectedStatusCode);
          });
      
          it('should return a JSON object from the login route', async () => {
            const response = await request(server)
            .post('/api/auth/login').send({username: "bob", password: "burger"});
            expect(response.type).toEqual('application/json');
          });

          it('should return an forbidden status code from the login route', async () => {
            const expectedStatusCode = 401;
      
            const response = await request(server)
            .post('/api/auth/login').send({username: "paul", password: "burger"});
            expect(response.status).toEqual(expectedStatusCode);
          });
    })
    
})

