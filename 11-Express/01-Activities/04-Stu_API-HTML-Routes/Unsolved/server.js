// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file
const terms = require('./terms.json');

const app = express();
const PORT = 3001;

// TODO: Initialize app variable


app.get('/', (req, res) => res.json(terms))


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
