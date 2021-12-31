const jsonSever = require("json-server")
const server = jsonSever.create()
const router = jsonSever.router("./mock/db.json")
const middlewares = jsonSever.defaults()
const port = process.env.PORT || 3001

server.use(middlewares)

server.use(jsonSever.rewriter({
    "/member/:username": "/member?username=:username"
}))

server.use("/", router)

server.listen(port)