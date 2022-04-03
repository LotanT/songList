const express = require('express')
const { getSongs, addSong} = require('./song.controller')
const router = express.Router()

router.get('/', getSongs)
router.post('/', addSong)

module.exports = router