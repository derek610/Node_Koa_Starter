const Router = require('koa-router');

const example = require('./route/example');
const product = require('./route/product');

const router = new Router();

router.use(example.routes());
router.use(product.routes());

module.exports = router;