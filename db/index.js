const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connection = mongoose.connection;

connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`) );
connection.on('connected', () => {
	console.log(`Mongoose default connection open to DB: ${connection.db.s.databaseName}`)

	console.log(`→ Collections available: ${Object.keys(connection.collections)}`)
	console.log(`→ Models available: ${connection.modelNames()}`)
});

module.exports = connection;