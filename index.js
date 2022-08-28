const express = require("express")
const cors = require("cors")
const { port } = require('./config')
const dbConnect = require('./db')
const { route } = require('./router')

dbConnect()
const app = express()
app.use(cors())
app.use("/api/*", route)
app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log(`Server up and running at ${port}`)
})