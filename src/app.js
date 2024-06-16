const express = require('express')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const compression = require('compression')

const app = express()

// middlewares 

app.use(morgan("combined"))
app.use(helmet())
app.use(compression())

// init db

require('./dbs/init.mongodb')
const { countConnect, checkOverLoad } = require('./helpers/check.connect');
// countConnect()
checkOverLoad()
// init routes 

app.get("/", (req, res, next) => {
    const strCompress = 'hello Fantipjs'
    return res.status(200).json({
        message: "welcome to fantips",
        metadata: strCompress.repeat(100000)
    })
})

// handling error

module.exports = app