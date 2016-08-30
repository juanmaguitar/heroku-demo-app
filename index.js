require('./models');
const db = require('./db');
const app = require('./app');

if (process.env.NODE_ENV==="development") {
  require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.DB_URI;

db.open(MONGODB_URI);
app.listen(PORT, () => console.log("Listening on port " + PORT) );
