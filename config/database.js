const mongoose = require('mongoose');

// make sure you have a DATABASE_URL=Whateveryourconnectionstringis in your .env file!
mongoose.connect(process.env.DATABASE_URL ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
