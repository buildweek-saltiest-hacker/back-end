const Actions = require('../../api/user-actions/actions-model')
const Auth = require('../../api/authentication/auth-model')
const db = require('../../database/dbConfig')

test('should be the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

beforeEach( async () => {
    await db('comments').truncate()
})

describe('accessing the actions model', () =>{

    describe('user is able to save a new comment', () => {
        it('should save comments', async () => {
            await Actions.saveComment({commentid: '1', commentdata: 'testing'})
            await Actions.saveComment({commentid: '2', commentdata: 'testing'})
            await Actions.saveComment({commentid: '3', commentdata: 'testing'})

            const comments = await db('comments')
            expect(comments).toHaveLength(3)
        })

        it('should return what was saved', async () => {
            await Actions.saveComment({commentid: '1', commentdata: 'testing'})
            let comment = await db('comments').where('id', 1).select('commentdata')
            expect(comment[0].commentdata).toBe('testing')
        })
    })

    // describe('user is able to fetch comments from their saved list', async () => {
    //     it('should fetch comments', async () => {
    //         await Actions.fetchComment(admin)
    //     })
    // })

    // describe('user is able to delete a comment', () => {

    // })
    
})

describe('accessing the auth model', () =>{

    describe('user is able to fetch comments from their saved list', () => {
        test.todo('test')
    })
    
    // describe('user is able to save a new comment', () => {

    // })

    // describe('user is able to delete a comment', () => {

    // })
    
})
