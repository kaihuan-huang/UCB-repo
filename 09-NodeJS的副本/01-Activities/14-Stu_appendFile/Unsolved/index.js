// TODO: What are we importing?
//importing a  node library 
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// 1st arguement = name of the file
// 2nd arg = the data will be appended
//3rd arg = callback that will be executed  

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // if error is true run the code immdiately 
  err ? console.error(err) : console.log('Commit logged!')
);
