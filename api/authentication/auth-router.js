const router = require('express').Router()
const authMethods = require('./auth-router')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

// endpoints

router.post('/register', (req, res) => {
    console.log('here...')
})

router.post('/login', (req, res) => {
    console.log('here...')
})

// support function

function generateToken(user) {
    return null
}

// middleware

function validInput() {
    return null
}

module.exports = router