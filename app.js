require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = express.Router();
const {userRoutes} = require('./routes/userRoutes');
const {shopRoutes} = require('./routes/shopRoutes');
const {cartRoutes} = require('./routes/cartRoutes');
const {authRoutes} = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', userRoutes);
app.use('/api', shopRoutes);
app.use('/api', cartRoutes);
app.use('/api', authRoutes);

//midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = express.Router();
app.use('/', userRouter);

const shopRouter = express.Router();
app.use('/', shopRouter);

const cartRouter = express.Router();
app.use('/', cartRouter);

const authRouter = express.Router();
app.use('/', authRouter)

app.listen(PORT, () => console.log(`Server ready on port: ${PORT}`));