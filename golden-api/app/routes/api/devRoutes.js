const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/devDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'dev')
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'dev', req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req,res)
})

router.patch('/update', (req, res)=> {
    dao.update(req,res)
})

module.exports = router