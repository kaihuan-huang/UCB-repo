

-- SELECT book_name, price
-- FROM book_prices
-- JOIN favorite_books ON favorite_books.id = book_prices.id;


SELECT favorite_books.book_name AS name,  book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;
