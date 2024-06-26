const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
    async create (req, res, next) {
        try {
            const {name} = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    
    async delete(req, res, next) {
        try{
            const {name} = req.query
            console.log(name)
            const brand = await Brand.findOne({where:{name: name}})
            Brand.destroy({where: {name: name}})
            return res.json(brand)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BrandController()