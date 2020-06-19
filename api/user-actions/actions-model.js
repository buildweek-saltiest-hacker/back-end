const db = require('../../database/dbConfig')

module.exports = {
    fetchComment,
    deleteComment, 
    saveComment
}

function fetchComment() {
    return db('comments')
}

function deleteComment() {
    return db('comments')
}

function saveComment() {
    return db('comments')
}

