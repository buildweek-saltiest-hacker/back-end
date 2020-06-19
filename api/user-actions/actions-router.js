const router = require('express').Router()
const actionMethods = require('./actions-model')

// endpoints

router.get('/comment/', (req, res) => {
    console.log('here...')
})

router.delete('/comment/delete', (req, res) => {
    console.log('here...')
})

router.put('/comment/add', (req, res) => {
    console.log('here...')
})

module.exports = router