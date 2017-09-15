let express = require('express');
let router = express.Router();
let mongodb = require('mongodb');
let Database = require('./db');

router.post('/', (req, res) => {
	let movie = req.body;
	movie._id = new mongodb.ObjectID();
	Database.db.collection('movies').save(movie).then(() => {
		res.sendStatus(200);
	})
})

router.get('/', (req, res) => {
	Database.db.collection('movies').find().toArray().then((movies) => {
		res.json(movies);
	})
})

router.get('/:id', (req, res) => {
	Database.db.collection('movies').find({userId: req.params['id']}).toArray().then((movies) => {
		res.json(movies);
	})
})

router.put('/', (req, res) => {
	let movie = req.body;
	movie._id = new mongodb.ObjectID(req.body.id);
	Database.db.collection('movies').save(movie).then(() => {
		res.sendStatus(200);
	})
})

router.delete('/:id', (req, res) => {
	let movieId = new mongodb.ObjectID(req.params['id']);
	Database.db.collection('movies').remove({_id: movieId}).then(() => {
		res.sendStatus(200);
	})
})

module.exports = router;