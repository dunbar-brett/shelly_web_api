require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json())

const oilsGalleryRouter = require('./routes/oil'); // maybe change this name
const watercolorGalleryRouter = require('./routes/watercolor'); // maybe change this name

app.use('/oil', oilsGalleryRouter);
app.use('/watercolor', watercolorGalleryRouter);

app.listen(3000, () => console.log('Server Started'));

