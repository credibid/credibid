const express = require('express');
const passport = require('passport');
require('./passport/passport')(passport);
const session = require('express-session');
const { connectWithDatabase } = require('./db');
const { PORT, SESSION_SECRET } = require('./config');
const userRouter = require('./routers/user.route');
const authRouter = require('./routers/auth.route');

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

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
