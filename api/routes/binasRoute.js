const { Router } = require('express')
const { ativaBina } = require('../controller/BinaController')
const BinaController = require('../controller/BinaController')

const router = Router()

router.get('/bina', BinaController.findAllBinas)
router.get('/bina/ativo', BinaController.findAllBinasAtivas)
router.get('/bina/:deviceId', BinaController.findOneBina)
router.post('/bina/save', BinaController.saveBina)
router.post('/bina/restaura/:deviceId', BinaController.restauraBina)
router.post('/bina/cancela/:id', BinaController.cancelaBina)
router.post('/bina/ativa/:id', BinaController.ativaBina)
router.put('/bina/atualiza/:deviceId', BinaController.atualizaBina)
router.delete('/bina/:deviceId', BinaController.deletaBina)

module.exports = router