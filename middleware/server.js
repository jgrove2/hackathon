require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const brcypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})