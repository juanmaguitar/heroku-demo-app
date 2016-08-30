const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const environment = process.env.NODE_ENV;
const MONGODB_URI="mongodb://aaaa:aaaa@ds019966.mlab.com:19966/students-skylab";

mongoose.connect(MONGODB_URI);

const StudentSchema = new mongoose.Schema({
  name: { type: String },
  github: { type: String }
});

var StudentModel = mongoose.model("student", StudentSchema);

app.get('/api/students', (req,res) => {
	StudentModel.find({}, (err, students) => {
		res.json(students);
	})
})

app.listen(PORT, () => console.log("Listening on port " + PORT) );