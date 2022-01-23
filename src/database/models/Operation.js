const { ObjectId, model, Schema } = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const DOCUMENT_NAME = 'Operation';
const COLLECTION_NAME = 'operations';

const schema = new Schema({
    id: {
        type: String,
        unique: true
    },
    operation: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    },
    test: String
})

module.exports = model(DOCUMENT_NAME, schema, COLLECTION_NAME);