const Router = require('koa-router');

const API_PREFIX = '/example';
const router = new Router({ prefix: API_PREFIX });

router.get('/', async (ctx) => {
    ctx.body = 'Hello Koa2';
});

router.get('/query-string', async (ctx) => {
    const name = ctx.query.name;
    const age = ctx.query.age;
    ctx.body = `Hello Koa2, name=${name}, age=${age}`;
});


module.exports = router;