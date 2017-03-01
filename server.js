require('babel-core/register');
require('babel-polyfill');
const express = require('express');
require('./server/index');

const production = process.env.NODE_ENV === 'production',
	port = process.env.PORT || 2017,
	app = express();

if (!production) {
	const chokidar = require('chokidar');
	const watcher = chokidar.watch('./server');

	watcher.on('ready', function() {
		watcher.on('all', function() {
			Object.keys(require.cache).forEach(function(id) {
				if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id]
			});

			console.log("Server updated..");
		})
	});
}

app.use(function (req, res, next) {
	require('./server/index')(req, res, next)
});

app.use('/', express.static('./web/'));

app.listen(port, '0.0.0.0', function (err, result) {
	if (err) return console.log(err);
	console.log(`Server is up in port ${port}`);
});