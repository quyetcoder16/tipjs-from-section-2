const express = require('express')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const compression = require('compression')
require('dotenv').config()

const app = express()
// console.log("process:: ", process.env);

// middlewares 

app.use(morgan("combined"))
app.use(helmet())
app.use(compression())

// init db

require('./dbs/init.mongodb')
const { countConnect, checkOverLoad } = require('./helpers/check.connect');
// countConnect()
// checkOverLoad()
// init routes 

app.use('/',require('./routes'))

// handling error

module.exports = app