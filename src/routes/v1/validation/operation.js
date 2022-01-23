const express = require("express")
const requestHandler = require('../../../helpers/requestHandler')
const { NotFoundResource, DuplicateResource, BadRequest } = require('../../../helpers/errorHandler')
const Operation = require('../../../database/repositories/Operation')

const router = express.Router()

//#region JSDoc
/**
 * @swagger
 * /validation:
 *  get:
 *    description: Validation operation result
 *    tags:
 *     - Validation
 *    parameters:
 *      - in: query
 *        name: operationId
 *        schema:
 *          type: string
 *          required: true
 *        description: Operation id
 *    responses:
 *      '200':
 *        description: Successfully response
 *        content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/operation'
 *      '400':
 *        description: Bad Request response
 *        content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/error'
 *      '401':
 *        description: Unauthorized response
 *        content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/error' 
 *      '409':
 *        description: Conflict response
 *        content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/error'             
 */
//#endregion JSDoc
router.get('/', 
    requestHandler(async (req, res, next) => {
        const operation = await Operation.findOne( { id: req.query.operationId } )      
        res.status(200).send(operation)
    })
)

module.exports = router