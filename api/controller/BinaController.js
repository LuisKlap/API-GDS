const database = require('../models')
const ChaveController = require('./ChaveController')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class BinaController extends ChaveController{
    static async findAllBinas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}
        data_inicial || data_final ? where.dataRequisicao = {} : null
        data_inicial ? where.dataRequisicao[Op.gte] = data_inicial : null
        data_final ? where.dataRequisicao[Op.lte] = data_final : null
        try {
            const todasAsBinas = await database.Bina.scope('todos').findAndCountAll({ where,
                order: [['id', 'DESC']] })
            return res.status(200).json(todasAsBinas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findAllBinasAtivas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}
        data_inicial || data_final ? where.dataRequisicao = {} : null
        data_inicial ? where.dataRequisicao[Op.gte] = data_inicial : null
        data_final ? where.dataRequisicao[Op.lte] = data_final : null
        try {
            const todasAsBinas = await database.Bina.findAndCountAll({ where ,
                order: [['id', 'DESC']]})
            return res.status(200).json(todasAsBinas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async findOneBina(req, res,) {
        const { deviceId } = req.params
        try {
            const umaBina = await database.Bina.findAndCountAll({ 
                where: { 
                    deviceId: String(deviceId) 
                },
                // include: {association: chave},
                limit: 3,
                order: [['id', 'DESC']]
            })
            return res.status(200).json(umaBina)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async saveBina(req, res){
        const objBina = req.body;
        const {chave} = req.body
        
        try {
            const novaBinaCriada = await database.Bina.create(objBina)
            database.sequelize.transaction(async transacao => {
               if (await database.Chaves.scope('todos').findOne({where:{ ativo: false,  id: Number(chave) }}, {transaction: transacao})){
                await database.Bina.scope('todos').update({ status: 'cancelado' }, {where: {chave : Number(chave)}}, {transaction: transacao})
               }else{
                await database.Bina.scope('todos').update({ status: 'confirmado' }, {where: {chave : Number(chave)}}, {transaction: transacao})
               }
               
            })
            
            return res.status(200).json([novaBinaCriada])
        } catch (error) {

            const erro = { message: error.message }  

            return res.status(500).json(erro)
        }
    }

    static async deletaBina(req,res){
        const {id} = req.params
        try {
            await database.Bina.scope('todos').destroy({where: {id: String(id)}})
            return res.status(200).json({mensagem: `bina "${id}" foi deletada!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraBina(req, res) {
        const {id} = req.params
        try {
            await database.Bina.restore({where: {id: String(id)}})
            return res.status(200).json({ where: `id ${id} restaurado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cancelaBina(req,res){
        const { id } = req.params

        try {
            database.sequelize.transaction(async transacao => {
                await database.Chaves.scope('todos').update({ ativo: false }, {where: {id : Number(id)}}, {transaction: transacao})
                await database.Bina.scope('todos').update({ status: 'cancelado' }, {where: {chave : Number(id)}}, {transaction: transacao})
            })
        
        return res.status(200).json({ where: ` ${id} Atualiado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async ativaBina(req,res){
        const { id } = req.params

        try {
            database.sequelize.transaction(async transacao => {
                await database.Chaves.scope('todos').update({ ativo: true }, {where: {id : Number(id)}}, {transaction: transacao})
                await database.Bina.scope('todos').update({ status: 'confirmado' }, {where: {chave : Number(id)}}, {transaction: transacao})
            })
        
        return res.status(200).json({ where: `Binas referente a chave id ${id} confirmadas!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = BinaController