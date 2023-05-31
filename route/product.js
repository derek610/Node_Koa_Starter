const Router = require('koa-router');
const productController = require('../controller/product');

const API_PREFIX = '/product';
const router = new Router({ prefix: API_PREFIX });
// const upload = multer();

// Body為application/json
router.post('/json', productController.postJson);

// Body為multipart/form-data
// 不能用koa-bodyparser，要用koa-body，且app.js要寫app.use(koaBody({multipart:true}));
router.post('/form-data', productController.postFormData);

router.get('/:code/path-var', productController.pathVar);

router.get('/query-string', productController.queryString);

module.exports = router;