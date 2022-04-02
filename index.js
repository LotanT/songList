const express = require('express')
const expressSession = require('express-session')
const dbService = require('./services/db.service')
let csvToJson = require('convert-csv-to-json');


const app = express()

dbService.connect()

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})