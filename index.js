const express = require('express')
const expressSession = require('express-session')
let csvToJson = require('convert-csv-to-json');


const app = express()

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})