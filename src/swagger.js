import swaggerAutogen from 'swagger-autogen'

const swagger = swaggerAutogen()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes.js']

const doc = {
  info: {
    version: "1.0.0",
    title: "APP - JaVie",
    description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
  },
  host: "localhost:5500",
  basePath: "/",
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
}

swagger(outputFile, endpointsFiles, doc)