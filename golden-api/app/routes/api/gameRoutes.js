const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/gamesDao')


router.get('/', (req, res)=> {
    dao.findInnerJoin(res, 'games')
})


router.get('/platform/:platform', (req, res)=> {
    console.log(req.params.platform)
    dao.findGameMake(res, 'games', req.params.platform)
    
})

router.get('/price/:price', (req, res)=> {
    dao.findGamePrice(res, 'games', req.params.price)
    
})

router.get('/:id', (req, res)=> {
    dao.findGameId(res, 'games', req.params.id)
})

router.post('/create', (req, res)=> {
    console.log(req.body)
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router