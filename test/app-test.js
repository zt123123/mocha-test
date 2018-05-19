const request = require("supertest"),
    app = require("../app")

describe("#koa app test", () => {
    let server = app.listen(9900)
    describe("#app server test", () => {

        it("#test GET /", async () => {
            let res = await request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Hello,world</h1>')
        })
        it("#test GET /path?name=zhangtian", async () => {
            let res = await request(server)
                .get('/path?name=zhangtian')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Hello,zhangtian</h1>')
        })
    })
})