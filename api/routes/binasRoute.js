const { Router } = require('express')
const { ativaBina } = require('../controller/BinaController')
const BinaController = require('../controller/BinaController')

const router = Router()

router.get('/bina', BinaController.findAllBinas)
router.get('/bina/ativo', BinaController.findAllBinasAtivas)
router.get('/bina/:deviceId', BinaController.findOneBina)
router.get('/bina/device/:deviceId', BinaController.binaPorDevice)
router.post('/bina/save', BinaController.saveBina)
router.delete('/bina/:id', BinaController.deletaBina)
router.post('/bina/restaura/:id', BinaController.restauraBina)
router.post('/bina/cancela/:id', BinaController.cancelaBina)
router.post('/bina/ativa/:id', BinaController.ativaBina)

module.exports = router