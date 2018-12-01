'use strict';

const express = require('express');
const serveIndex = require('serve-index');
const port  = parseInt(process.argv[2] || 8888, 10);

const app = express();
app.use(express.static('.'));
app.use(serveIndex('.', {icons: true}));
app.listen(process.env.PORT || port);
console.log('Server running at http://localhost:' + port);

