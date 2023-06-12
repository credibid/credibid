const express = require('express');
const cors = require('cors');
const { connectWithDatabase } = require('./db');
const { PORT, FRONTEND_CLIENT } = require('./config');
const userRouter = require('./routers/user.route');
const authRouter = require('./routers/auth.route');
// const authRouter = require('./routers/auth.route');

const app = express();

// Middlewares
app.use(
  express.json({
    limit: '10mb',
  })
);
app.use(
  cors({
    origin: 'http://localhost:5173',
    // origin: '*',
    // methods: 'GET,POST,PUT,DELETE',
    // credentials: true,
  })
);
// app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.json());
// app.use(
//   session({
//     secret: SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     store: MongoStore.create({
//       mongoUrl: MONGO_URI + DB_NAME + '?retryWrites=true&w=majority',
//     }),
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.authenticate('session'));

// app.use('/auth', authRouter);

app.use('/user', userRouter);
app.use('/auth/', authRouter);

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
