const database = require('../models')

class ChaveController {
    static async listaChavesAtivas(req, res) {
        try {
            const todasAsChavesAtivas = await database.Chaves.findAll()
            return res.status(200).json(todasAsChavesAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaChaves(req, res) {
        try {
            const todasAsChaves = await database.Chaves.scope('todos').findAll()
            return res.status(200).json(todasAsChaves)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async findOneChave(req, res) {
        const { id } = req.params
        try {
            const umaChave = await database.Chaves.scope('todos').findOne({ 
                where: { 
                    id: String(id) 
                } 
            })
            return res.status(200).json(umaChave)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastraChave(req, res){
        const objChave = req.body;
        const chaveEncode = btoa(objChave.chave);

        objChave.chaveEncode = chaveEncode;

        try {
            const novaChaveCriada = await database.Chaves.create(objChave)
            
            return res.status(200).json(novaChaveCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaChave(req,res) {
        const {id} = req.params
        const novasInfos = req.body
        try {
            await database.Chaves.scope('todos').update(novasInfos, {where: {id: Number(id)}})
            const chaveAtualizada = await database.Chaves.scope('todos').findOne({ where: {id: Number(id)}})
            return res.status(200).json(chaveAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaChave(req,res){
        const {id} = req.params
        try {
            await database.Chaves.scope('todos').destroy({where: {id: String(id)}})
            return res.status(200).json({mensagem: `chave "${id}" foi deletada!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ChaveController