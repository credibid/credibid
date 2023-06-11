const express = require('express');
const { connectWithDatabase } = require('./db');
const { PORT, SESSION_SECRET, MONGO_URI, DB_NAME } = require('./config');
const userRouter = require('./routers/user.route');

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

app.use('/user', userRouter);

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
