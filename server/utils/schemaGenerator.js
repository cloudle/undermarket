import fs from 'fs';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

import schema from '../graphql'

async function generateSchema (path) {
	const result = await (graphql(schema, introspectionQuery));

	if (result.errors) {
		console.error(
			'ERROR introspecting schema: ',
			JSON.stringify(result.errors, null, 2));
	} else {
		fs.writeFileSync(path, JSON.stringify(result, null, 2));
	}
}

module.exports = generateSchema;