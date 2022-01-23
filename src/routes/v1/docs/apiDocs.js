const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const express = require("express")
const router = express.Router()

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Mini Calculator API",
      description: "Mini Calculator API",
      contact: {
        name: "Djalma Freitas"
      },
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    servers: [{
      url: "http://localhost:3000/v1/",
      description: "Development server"
    }],
    components: {
      schemas: {
        operation: {
          type: "object",
          required: [
            "id",
            "operation",
            "result"
          ],
          properties: {
            id: {
              type: "string",
              description: "Operation result identifier"
            },
            operation: {
              type: "string",
              description: "The operation executed"
            },
            result: {
              type: "number",
              description: "The result of operation"
            }
          }
        },
        error: {
          type: "object",
          required: [
            "code",
            "type",
            "message"
          ],
          properties: {
            code: {
              type: "integer",
              description: "The code of error"
            },
            type: {
              type: "string",
              description: "The type of error"
            },
            message: {
              type: "string",
              description: "The message of error"
            }
          }
        }
      }
    }
  },
  apis: ["./src/routes/v1/**/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }))

module.exports = router

