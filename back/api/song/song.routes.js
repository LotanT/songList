const express = require('express')
const { getSongs, addSong} = require('./song.controller')
const {requireAuth} = require('../../middlewares/requireAuth.middleware')
const router = express.Router()

// router.get('/',requireAuth, getSongs)
router.get('/:username',requireAuth, getSongs)
router.post('/', addSong)

module.exports = router