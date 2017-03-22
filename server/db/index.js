import { v1 as neo4j } from 'neo4j-driver';

export const neoConnection = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'Ultimate'));

neoConnection.onComplete = () => {
	console.log('Completed Neo4j connection!');
};

neoConnection.onError = (error) => {
	console.log('Cannot connect to Neo4j, ', error);
};