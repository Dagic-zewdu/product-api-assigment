const express = require("express")
const cors = require("cors")
const { port } = require('./config')
const dbConnect = require('./db')
dbConnect()
const app = express()

app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log(`Server up and running at ${port}`)
})