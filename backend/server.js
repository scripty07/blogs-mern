const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected successfully.');
});

const Blogs = require('./routes/blog');
app.use('/blogs', Blogs);
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
