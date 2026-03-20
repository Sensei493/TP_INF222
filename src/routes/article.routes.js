const express = require('express');
const router = express.Router();
const controller = require('../controllers/article.controller');

router.post('/articles', controller.createArticle);

router.get('/articles', controller.getArticles);

router.get('/articles/search', controller.searchArticles);

router.get('/articles/:id', controller.getArticle);

router.put('/articles/:id', controller.updateArticle);

router.delete('/articles/:id', controller.deleteArticle);

module.exports = router;