import { Pi } from './utils';
let express = require('express');

let router = express.Router();

router.get('/api', function (req, res) {
	const responseMarkup = `Hello, this is api`;

	res.send(responseMarkup);
});

module.exports = router;