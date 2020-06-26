const db = require('../../database/dbConfig')

module.exports = {
    fetchComment,
    deleteComment, 
    saveComment,
    savedComment
}

function fetchComment(username) {
    // returns list of comments the user has saved
    const user_id = db('users').where('username', username).select('id')
    // console.log(user_id)
    return db('comments').where('comment_user.user_id', user_id).join('comment_user', 'comment_user.comment_id', 'comments.id').select('comments.commentdata')
}

function deleteComment(commentid, username) {
    // Add a proper return value for the try block
    const user_id = db('users').where('username', username).select('id')

    try {
        return db('comment_user').where({'comment_id': commentid, 'user_id': user_id }).del()
    } catch {
        return `Could not unsave ${commentid}`
    }
}

function saveComment(commentInfo) {
    // Add a proper return value for the try block

    try {
        return db('comments').insert({ id: commentInfo.commentid, commentdata: commentInfo.commentdata })
    } catch {
        throw new Error
    }
}

function savedComment(commentInfo, username) {
    // Add a proper return value for the try block

    try {
        const user_id = db('users').where('username', username).select('id')
        return db('comment_user').insert({ comment_id: commentInfo.commentid, user_id: user_id })
    } catch {
        throw new Error
    }
}