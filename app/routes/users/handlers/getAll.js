const User = process.getModel('user');

function getAll( req, res ) {

	console.log("doing stuff...")
	// Find all movies.
	User.find()
		.then( (users) => res.json(users) )
		.catch( (err) => console.log(err) );

}

module.exports = getAll;