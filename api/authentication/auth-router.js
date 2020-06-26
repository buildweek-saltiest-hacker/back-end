const router = require('express').Router()
const AuthMethods = require('./auth-model')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../shared-fns/secrets')

// endpoints

router.post('/register', validInput, async (req, res) => {
    let user = req.body

    const hashedPW = bcrypt.hashSync(user.password, 4)
    user.password = hashedPW

    try {
        const result = await AuthMethods.register(user)
        res.status(200).json({ newUser: result })
    } catch (err) {
        // add if statement to return a different error if the username already exists

        res.status(500).json({ message: 'Server error. Please try again.', error: err.message })
    }
})

router.post('/login', validInput, (req, res) => {
    const { username, password } = req.body;

    AuthMethods.findBy('username', username)
    .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          res.status(200).json({ token });
        } else {
          res.status(401).json({ message: 'Invalid credentials. Please re-enter your user credentials.' });
        }
    })
    .catch(err => {
        res.status(500).json({ msg: 'Server error. Please try again.', error: err });
    });
})

// support function

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, jwtSecret, options )
}

// middleware

function validInput(req, res, next) {
    const user = req.body

    if (user.username && user.password && typeof user.password ==='string') {
        next()
    } else {
        res.status(406).json({ message: 'Please enter in both a valid username or password.'})
    }
}

module.exports = { 
    router: router, 
    validInput: validInput }