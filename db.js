
let mongodb = require('mongodb');

class Database {
	static connect() {
		return mongodb.MongoClient.connect('mongodb://ryan:098@ds135364.mlab.com:35364/test-db').then((db) => {
			this.db = db;
			console.log('database connected');
		})
	}
}

module.exports = Database;