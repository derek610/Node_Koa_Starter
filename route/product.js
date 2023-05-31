const Router = require('koa-router');
// const multer = require('@koa/multer');
// const { koaBody } = require('koa-body');

const API_PREFIX = '/product';
const router = new Router({ prefix: API_PREFIX });
// const upload = multer();

// Body為application/json
router.post('/json', async (ctx) => {
    ctx.body = `create product: ${ctx.request.body.productName}`;
});

// Body為multipart/form-data
// 不能用koa-bodyparser，要用koa-body，且app.js要寫app.use(koaBody({multipart:true}));
router.post('/form-data', async (ctx) => {
    ctx.body = `create product: ${ctx.request.body.productName}`;
});

module.exports = router;