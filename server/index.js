const express = require('express');
const { connectWithDatabase } = require('./db');
const { PORT } = require('./config');

const app = express();

// Middlewares
app.use(
  express.json({
    limit: '10mb',
  })
);

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

const startServer = async () => {
  try {
    await connectWithDatabase();
    app.listen(PORT, () =>
      console.log(`Server started at http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
