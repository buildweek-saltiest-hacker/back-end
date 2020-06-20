const router = require('express').Router()
const ActionMethods = require('./actions-model')

// endpoints


router.get('/comment/', async (req, res) => {
    try {
        const result = await ActionMethods.fetchComment()
        res.status(200).json( result )
    } catch (err) {
        res.status(500).json({ message: 'Server error. Please try again.' })
    }
})

router.delete('/comment/delete', async (req, res) => {
    const { commentid } = req.body
    console.log(req.decodeToken)

    try {
        const result = await ActionMethods.deleteComment(commentid, req.decodedJWT.username)
        res.status(200).json( result )
    } catch (err) {
        res.status(500).json({ message: 'Server error. Please comment could not be unsaved. Please try again later.' })
    }
})

router.put('/comment/add', async (req, res) => {
    try {
        let result = await ActionMethods.saveComment(req.body)
        result = await ActionMethods.savedComment(req.body, req.decodedJWT.username)
        res.status(200).json( result )
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error. Please comment could not be saved. Please try again later.' })
    }
})

module.exports = router