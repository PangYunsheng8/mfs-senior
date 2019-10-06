const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const router = new Router()

app.use(async (ctx,next) => {
    //ctx.body = 'Hello World';
    console.log("111111111111")
    await next()
    console.log("333333333333")
});
app.use(async (ctx,next) => {
    //ctx.body = 'Hello World';
    await next()
    console.log("222222222222")
});
app.use(router.routes())
app.use(router.allowedMethods()) //兜底处理404

router.get('/test', async(ctx)=>{
    ctx.body = "text"
})
app.listen(3000);