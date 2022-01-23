const Operation = require('../models/Operation')

const findAll = async ({ page }) => {
    const limit = 100
    const skip = limit * (page - 1)
    return await Operation.find({}, '-_id -__v', { skip, limit }).lean().exec()
}

const findOne = async ( {id} ) => {
    return await Operation.findOne({ id }, '-_id -__v').lean().exec()
}

const create = async ( {operation}) => { 
    return await Operation.create(operation)
}

const remove = async ( { id }) => {
    return await Customer.deleteOne({ id })
}

module.exports = {
    findAll,
    findOne,
    create,
    remove
}