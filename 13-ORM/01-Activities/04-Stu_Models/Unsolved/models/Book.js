const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    // the primary key name should be book_id.
    book_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
     },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'book',
    freezeTableName: true
    //When Sequelize syncs the model with the database, the table name should be book (singular) 
  }
);

module.exports = Book;
//How can you globally define table-naming rules for your Sequelize connection?