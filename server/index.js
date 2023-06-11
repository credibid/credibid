const express = require('express');
const { connectWithDatabase } = require('./db');
const { PORT } = require('./config');
const userRouter = require('./routers/user.route');
const federatedRouter = require('./routers/googleAuth.route');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
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
app.use('/thridpartylogin', federatedRouter);

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
