const FileIO = require("./fileIO");

const fileIO = new FileIO();

fileIO.write("message.txt", "Hello World!");

const message = fileIO.read("message.txt");

console.log(message);

fileIO.append("message.txt", "\nGoodbye World!");

const message2 = fileIO.read("message.txt");

console.log(message2);