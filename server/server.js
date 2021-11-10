const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()
const POST = '2333'
app.use(koaStatic(process.cwd()))

app.listen(POST, () => {
    console.log(`run at localhost:${POST}`)
})