// DEPENDENCIES
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// MONGODB CONNECTION
const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection successful');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

// BOOTSRRAPPING SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
