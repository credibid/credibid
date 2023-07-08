const express = require('express');
const cors = require('cors');
const { connectWithDatabase } = require('./db');
const { PORT } = require('./config');
const userRouter = require('./routers/user.route');
const adminRouter = require('./routers/admin.route');
const bankRouter = require('./routers/bank.route');
// const authRouter = require('./routers/auth.route');

const app = express();

// Middlewares
app.use(
  express.json({
    limit: '10mb',
  })
);

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/bank', bankRouter);

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
