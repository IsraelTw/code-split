const path = require('path');

const express = require('express');

const server = express();

server.use(express.static(path.join(__dirname, '../client/build'), { index: 'index.html' }));

server.listen(3001, () => console.log(`server run on http://localhost:3001`));