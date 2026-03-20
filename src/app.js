const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const articleRoutes = require('./routes/article.routes');
app.use('/api', articleRoutes);

app.get('/', (req, res) => {
    res.send('API Blog OK 🚀');
});

app.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});