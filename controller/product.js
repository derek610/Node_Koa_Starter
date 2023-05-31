const postJson = async (ctx) => {
    ctx.body = `create product: ${ctx.request.body.productName}`;
};

const postFormData = async (ctx) => {
    ctx.body = `create product: ${ctx.request.body.productName}`;
};

const pathVar = async (ctx) => {
    ctx.body = `get product: ${ctx.request.params.code}`;
};

const queryString = async (ctx) => {
    ctx.body = `get product: ${ctx.request.query.code}`;
};

module.exports = {
    postJson,
    postFormData,
    pathVar,
    queryString
};