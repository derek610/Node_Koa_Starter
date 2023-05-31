const Koa = require('koa');  
const logger = require('koa-logger');
const { koaBody } = require('koa-body');
const router = require('./router');
const app = new Koa(); 

// 解析HTTP Request Body
app.use(koaBody({ 
    // 參數可以參考https://www.npmjs.com/package/koa-body?activeTab=readme
    multipart: true,
    json: true,
    jsonLimit: '1mb',
    encoding: 'utf-8'
}));

app.use(logger());



/**
 * logger
 */
// app.use(async(ctx, next) => {     
//     const start_time = Date.now();     
//     await next();     
//     const ms = Date.now() - start_time;            
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`); 
// });
 
// app.use(async function(ctx) {     
//     ctx.body = 'Hello Koa2'; 
// });  

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);