const express = require("express")
const requestHandler = require('../../../helpers/requestHandler')
const { NotFoundResource, DuplicateResource, BadRequest } = require('../../../helpers/errorHandler')
const Operation = require('../../../database/repositories/Operation')
const { v4: uuidv4 } = require('uuid')

const router = express.Router()

//#region JSDoc
/**
 * @swagger
 * /operations/addition:
 *  post:
 *    description: Execute a addition operation
 *    tags:
 *     - Addition
 *    parameters:
 *      - in: query
 *        name: a
 *        schema:
 *          type: number
 *          required: true
 *        description: First number
 *      - in: query
 *        name: b
 *        schema:
 *          type: number
 *          required: true
 *        description: Second number
 *    responses:
 *      '201':
 *        description: Successfully response
 *        headers:
 *          OperationId:
 *             schema:
 *               type: string
 *             description: Operation identifier.
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
router.post('/addition', 
    requestHandler(async (req, res, next) => {
        const result = parseInt(req.query.a) + parseInt(req.query.b)
        const operation = await Operation.create( { operation: {
            id: uuidv4(),
            operation: 'addition',
            result
        } } )
        res.header('OperationId', operation.id);
        res.sendStatus(201)
    })
)

//#region JSDoc
/**
 * @swagger
 * /operations/subtraction:
 *  post:
 *    description: Execute a subtraction operation
 *    tags:
 *     - Subtraction
 *    parameters:
 *      - in: query
 *        name: a
 *        schema:
 *          type: number
 *          required: true
 *        description: First number
 *      - in: query
 *        name: b
 *        schema:
 *          type: number
 *          required: true
 *        description: Second number
 *    responses:
 *      '201':
 *        description: Successfully response
 *        headers:
 *          OperationId:
 *             schema:
 *               type: string
 *             description: Operation identifier.
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
router.post('/subtraction', 
    requestHandler(async (req, res, next) => {
        const result = parseInt(req.query.a) - parseInt(req.query.b)
        const operation = await Operation.create( { operation: {
            id: uuidv4(),
            operation: 'subtraction',
            result
        } } )  
        res.header('OperationId', operation.id);
        res.sendStatus(201)
    })
)

//#region JSDoc
/**
 * @swagger
 * /operations/multiplication:
 *  post:
 *    description: Execute a multiplication operation
 *    tags:
 *     - Multiplication
 *    parameters:
 *      - in: query
 *        name: a
 *        schema:
 *          type: number
 *          required: true
 *        description: First number
 *      - in: query
 *        name: b
 *        schema:
 *          type: number
 *          required: true
 *        description: Second number
 *    responses:
 *      '201':
 *        description: Successfully response
 *        headers:
 *          OperationId:
 *             schema:
 *               type: string
 *             description: Operation identifier.
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
router.post('/multiplication', 
    requestHandler(async (req, res, next) => {
        const result = parseInt(req.query.a) * parseInt(req.query.b)
        const operation = await Operation.create( { operation: {
            id: uuidv4(),
            operation: 'multiplication',
            result
        } } )  
        res.header('OperationId', operation.id);
        res.sendStatus(201)
    })
)

//#region JSDoc
/**
 * @swagger
 * /operations/division:
 *  post:
 *    description: Execute a division operation
 *    tags:
 *     - Division
 *    parameters:
 *      - in: query
 *        name: a
 *        schema:
 *          type: number
 *          required: true
 *        description: First number
 *      - in: query
 *        name: b
 *        schema:
 *          type: number
 *          required: true
 *        description: Second number
 *    responses:
 *      '201':
 *        description: Successfully response
 *        headers:
 *          OperationId:
 *             schema:
 *               type: string
 *             description: Operation identifier.
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
router.post('/division', 
    requestHandler(async (req, res, next) => {
        const result = parseInt(req.query.a) / parseInt(req.query.b)
        const operation = await Operation.create( { operation: {
            id: uuidv4(),
            operation: 'division',
            result
        } } )  
        res.header('OperationId', operation.id);
        res.sendStatus(201)
    })
)

module.exports = router