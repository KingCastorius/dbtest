let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();
let movies = require('./movies');
let users = require('./user');
let Database = require('./db');

Database.connect();

app.use(bodyParser.json());

app.get('/', ((req, res) => {
	res.end();
}))

app.use('/api/movies', movies);
app.use('/api/user', users)

app.listen(3000, () => {
	console.log('server connected')
})

module.exports = router;