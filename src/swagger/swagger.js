const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Blog API",
            version: "1.0.0",
            description: "API simple pour gérer des articles de blog",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./src/routes/*.js"], // on va documenter les routes directement
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;