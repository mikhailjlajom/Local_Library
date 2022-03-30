function findAccountById(accounts, id) {
  return accounts.find((item) => item.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((userA, userB) =>
    userA.name.last.toLowerCase() > userB.name.last.toLowerCase() ? 1 : -1
  );
}

// It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
// loop through books
// find accts.id in books.borrows.id
// if found count +1
// return count

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    let count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + count;
  }, 0);
}

// another way to do getTotalNumberOfBorrows
//   let count = 0;
//   for (let book of books) {
//     const { borrows } = book;
//     for (let currentBorrow of borrows) {
//       if (currentBorrow.id === account.id) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];
  books.forEach((prop) => {
    if (prop.borrows.find((key) => key.id === account.id && !key.returned)) {
      checkedOut.push(prop);
    }
  });
  checkedOut.forEach((prop) => {
    let author = authors.find((key) => key.id === prop.authorId);
    prop["author"] = author;
  });
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
