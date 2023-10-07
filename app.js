require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = express.Router();
const {userRoutes} = require('./routes/userRoutes');
const {shopRoutes} = require('./routes/shopRoutes');
const {cartRoutes} = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', userRoutes);
app.use('/api', shopRoutes);
app.use('/api', cartRoutes);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server ready on port: ${PORT}`));