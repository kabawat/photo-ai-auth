const express = require('express')
const cors = require('cors')
const { log } = console
const router = require('./router/')
const app = express()
const port = 2917
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.listen(port, () => {
    log(`http://localhost:${port}`)
})