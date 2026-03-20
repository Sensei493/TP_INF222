const express = require('express');
require('./config/db');

const app = express();
const articleRoutes = require('./routes/article.routes');
app.use('/api', articleRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Yo nigga mon serveur donne free ")
});

app.listen(3000, () => {
    console.log("Le serveur tourne sur le port 3000")
});
