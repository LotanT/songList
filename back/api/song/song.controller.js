const songService = require('./song.service.js');
const logger = require('../../services/logger.service')

async function getSongs(req, res) {
  try {
    var queryParams = req.query;
    const songs = await songService.query(queryParams)
    res.json(songs);
  } catch (err) {
    logger.error('Failed to get songs', err)
    res.status(500).send({ err: 'Failed to get songs' })
  }
}

async function addSong(req, res) {
  try {
    let song = req.body;
    console.log(req.body);
    if(!song) song = {
      "song_name": "crazy",
      "band": "aerosmith",
      "year": "1990"
  }
    await songService.add(song)
    console.log(song);
    res.json(song)
  } catch (err) {
    logger.error('Failed to add song', err)
    res.status(500).send({ err: 'Failed to add song' })
  }
}

module.exports = {
  getSongs,
  addSong
}
