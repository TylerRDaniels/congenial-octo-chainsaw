const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3001

//security
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use('/api', router)

//all routes
server.get('/', (req, res)=> {
    res.json({
        'All Devs': `http://localhost:${PORT}/api/dev`,
        'All Pubs': `http://localhost:${PORT}/api/pub`,
        'All Console': `http://localhost:${PORT}/api/console`,
        'All Games': `http://localhost:${PORT}/api/games`,
        'All Applications': `http://localhost:${PORT}/api/app`,
        'All Reviews': `http://localhost:${PORT}/api/review`,
        'All Questions': `http://localhost:${PORT}/api/question`
    })
})

server.listen(PORT, ()=> {
    console.log(`Port: ${PORT}`)
})