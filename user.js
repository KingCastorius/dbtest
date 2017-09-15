let express = require('express');
let router = express.Router();
let mongodb = require('mongodb');
let Database = require('./db');

router.post('/', (req, res) => {
	let user = req.body;
	user._id = new mongodb.ObjectID();
	Database.db.collection('users').save(user).then(() => {
		res.sendStatus(200);
	})
})

module.exports = router;