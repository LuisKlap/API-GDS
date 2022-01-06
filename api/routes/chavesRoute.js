const { Router } = require('express')
const ChaveController = require('../controller/ChaveController')
const { route } = require('./binasRoute')

const router = Router()

router.get('/chave/ativo', ChaveController.listaChavesAtivas)
router.get('/chave', ChaveController.listaChaves)
router.get('/chave/:id', ChaveController.findOneChave)
router.post('/chave/save', ChaveController.cadastraChave)
router.put('/chave/:id', ChaveController.atualizaChave)
router.delete('/chave/:id', ChaveController.deletaChave)

module.exports = router