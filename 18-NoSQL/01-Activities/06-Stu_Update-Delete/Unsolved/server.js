const express = require('express');
const mongodb = require('mongodb').MongoClient;
// We import the ObjectId() function from MongoDB
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

app.post('/create', (req, res) => {
  // The title and author will be provided by the request body
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

// TODO: Add Delete route that uses a filter to delete a single document by id
app.delete('/delete', (req, res) => {
  console.log('req.body',req.body);
  // The title and author will be provided by the request body
  db.collection('bookCollection').deleteOne(
    { "_id": ObjectId(req.body._id)},
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});
//db.groceryCollection.deleteOne({ "_id" : ObjectId("YOUR-UNIQUE_ID")} );

//Way2 to delete
// app.delete('/delete/:id', (req, res) => {
//   console.log('req.body',req.body);
//   // The title and author will be provided by the request body
//   db.collection('bookCollection').deleteOne(
//     { _id: ObjectId(req.body._id)},
//     (err, results) => {
//       if (err) throw err;
//       res.json(results);
//     }
//   );
// });