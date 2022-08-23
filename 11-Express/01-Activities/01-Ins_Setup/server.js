const express = require('express'); //dependency
const path = require('path'); //Node.js

const app = express();
const PORT = 3001;

app.use(express.static('public')); //important! 'folder'

app.get('/', (_req, res) => res.send('Navigate to /send or /routes')); //useless

app.get('/send', (_req, res) =>
  // console.log('_dirname', __dirname);
  res.sendFile(path.join(__dirname, 'public/sendFile.html')) //ignore the req, _在req前，可以忽视req
);

app.get('/routes', (_req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
