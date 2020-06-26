const Actions = require('../../api/user-actions/actions-model')
const Auth = require('../../api/authentication/auth-model')
const db = require('../../database/dbConfig');
const { fetchComment, deleteComment } = require('../../api/user-actions/actions-model');

test('should be the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

beforeEach( async () => {
    await db('comments').truncate()
    await db('users').truncate()
    await db('comment_user').truncate()
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

    describe('user is able to fetch comments from their saved list', () => {
        it('it should fetch a users comments', async () => {
            let username = 'test'
            await db('users').insert({ id: '1', username: 'test', password: 'test'})
            await db('comments').insert({id: '1', commentdata: 'comment1'})
            await db('comment_user').insert({ comment_id: '1', user_id: '1' })
            let comment = await fetchComment(username)
            expect(comment).toHaveLength(1)
        })
    })

    // describe('user is able to delete a comment', () => {
    //     it('it should fetch a users comments', async () => {
    //         let username = 'test'
    //         let commentid = '1'
    //         await db('users').insert({ id: '1', username: 'test', password: 'test'})
    //         await db('comments').insert({id: '1', commentdata: 'comment1'})
    //         await db('comment_user').insert({ id: '1', comment_id: '1', user_id: '1' })

    //         await deleteComment(commentid, username)

    //         let comment = await db('comments')
    //         expect(comment).toHaveLength(0)
    //     })
    // })
    
})

describe('accessing the user auth model', () =>{

    // describe('user is able to save a new comment', () => {

    // })

    // describe('user is able to delete a comment', () => {

    // })
    
})
