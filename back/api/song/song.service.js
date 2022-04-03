const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
let csvToJson = require('convert-csv-to-json');

async function query() {
    let collection
    try {
        let criteria = {}
        collection = await dbService.getCollection('song')
        // console.log(collection);
        var songs = await await collection.find(criteria).toArray()
        return songs
    } catch (err) {
        console.log(collection);
        logger.error('cannot find songs', err)
        throw err
    }
}


async function add(song) {
    try {
        console.log(song);
        const collection = await dbService.getCollection('song')
        const addedSong = await collection.insertOne(song)
        return addedSong
    } catch (err) {
        logger.error('cannot insert song', err)
        throw err
    }
}


module.exports = {
    query,
    add
}