const mongoose = require('mongoose');
const { MONGO_URI, DB_NAME } = require('./config');

mongoose.connection
  .on('open', () => console.log('Connected with database'))
  .on('error', (error) => console.log(error));

const connectWithDatabase = async (database = DB_NAME) => {
  try {
    const uri = MONGO_URI + database + '?retryWrites=true&w=majority';

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectWithDatabase, disconnectFromDatabase, mongoose };
