'use strict';

const express = require('express');
const serveIndex = require('serve-index');

const app = express();
app.use(express.static('.'));
app.use(serveIndex('.', {icons: true}));
app.listen(process.env.PORT || 3000);

