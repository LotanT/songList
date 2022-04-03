const express = require('express')
const expressSession = require('express-session')


const app = express()

const songRoutes = require('./api/song/song.routes')
app.use('/api/song', songRoutes)

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})