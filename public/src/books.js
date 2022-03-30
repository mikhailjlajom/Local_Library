// use find method to get authors ID
function findAuthorById(authors, id) {
  return authors.find((auth) => auth.id === id, {});
}

// use find method to get books ID
function findBookById(books, id) {
  return books.find((book) => book.id === id, {});
}

function partitionBooksByBorrowedStatus(books) {
  let partition = [];
  let borrowedBooks = books.filter(
    (book1) => book1.borrows[0].returned === false
  );
  let unBorrowedBooks = books.filter(
    (book2) => book2.borrows[0].returned === true
  );
  partition.push(borrowedBooks);
  partition.push(unBorrowedBooks);
  return partition;
}

// use map method to create an array
// use find method to match acct id with borrow id
// return
// needs only 10

function getBorrowersForBook(book, accounts) {
  let borrowersBook = book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
  });
  return borrowersBook.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
