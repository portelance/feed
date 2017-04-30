var path = require('path'),
		fs = require('fs'),
		express = require('express'),
		mongoose = require('mongoose'),
		bodyParser = require('body-parser');

var app = express();

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
});
app.use(express.static(path.join(__dirname, '../client')));

mongoose.connect('mongodb://localhost:27017/myproject');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected');
});

var entrySchema = mongoose.Schema({
	'content': String
});
var Entry = mongoose.model('Entry', entrySchema);

app.post('/', bodyParser.json(), function(req, res) {
		console.log('POST at "/" with content: ' + req.body.content);
		var entry = new Entry({'content': req.body.content});
		entry.save(function (err, entry) {
			if (err) return console.error(err);
			console.log('Saved entry with content: ' + req.body.content);
		});
	});

app.get('/entries', function(req, res) {
	console.log('GET at "/entries"');
	Entry.find(function (err, entries) {
		if (err) return console.error(err);
		console.log(JSON.stringify(entries));
		res.json(entries);
	});
});

var server = app.listen(8000, function() {
	console.log('Running at localhost:' + server.address().port)
});