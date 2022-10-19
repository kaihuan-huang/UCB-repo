const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
// Schemas define the shape of the documents within the collection.
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author:{ type: String, required: true },
    price: Number
  });
// TODO: Create a custom instance method named `getDiscount`
// Schemas can also define methods that act on an instance of the model or document
// This custom method extends the methods object
bookSchema.methods.getDiscount = function () {
    // The 'this' keyword is used to specify the properties belonging to the particular instance
    const disCount = this.price * 0.5;
    console.log(
      `This book has the name ${this.title} and has discount ${discountedBook}`
    );
  };
// TODO: Create a model named `Book`
// Models are constructors compiled from a schema and pass down the properties and methods to each instance
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
// Instances created from a model have access to the methods and properties
const discountedBook = new Book({ name: 'discountedBook', getDiscount});
// TODO: Call the custom instance method on the instance

module.exports = Book;
