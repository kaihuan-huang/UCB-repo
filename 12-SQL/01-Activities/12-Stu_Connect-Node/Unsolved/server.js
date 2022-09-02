const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//midware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to the database mysql -u root -p
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

//database query: query; callback itself
db.query('SELECT * FROM students', function (err, results) {
  if(err){
    return console.log(err)
  }console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
