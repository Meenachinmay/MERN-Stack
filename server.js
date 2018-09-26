const express = require('express');
const bodyParser = require('body-parser');
const mongooes = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// Bodyparser middlerware layer

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MONGO DB
mongooes
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is started at port ${port}`));