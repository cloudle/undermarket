require('babel-core/register');
require('babel-polyfill');
require('./server/index');

const path = require('path'),
	express = require('express'),
	schemaPath = path.join(__dirname, './graphql.config.json'),
	generateSchema = require('./server/utils/schemaGenerator');

const production = process.env.NODE_ENV === 'production',
	port = process.env.PORT || 2017,
	app = express();

if (!production) {
	const chokidar = require('chokidar');
	const watcher = chokidar.watch('./server');

	generateSchema(schemaPath);

	watcher.on('ready', function() {
		watcher.on('all', function() {
			Object.keys(require.cache).forEach(function(id) {
				if (/[\/\\]server[\/\\]/.test(id)) {
					delete require.cache[id]
					generateSchema(schemaPath);
				}
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