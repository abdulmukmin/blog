const   express = require('express'),
        router = express.Router(),
        ArticleController = require('../controllers/article_controller.js');

router.post('/', ArticleController.create);
router.get('/readAll', ArticleController.readAll);
router.post('/:id', ArticleController.readOwnArticle);
router.put('/:id', ArticleController.update);
router.delete('/:id', ArticleController.delete);

module.exports = router