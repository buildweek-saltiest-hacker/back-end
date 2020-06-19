const express = require("express") 
const server = express();
const cors = require("cors");
const helmet = require('helmet')

const actionsRouter = require('./user-actions/actions-router')
const authRouter = require('./authentication/auth-router')
const authFn = require('./shared-fns/auth-function')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/auth', authRouter)
server.use('/api/actions', actionsRouter)


server.get('/', (req, res) => {
    console.log('it is working!')
} )

module.exports = server