const getTotalBooksCount = (books) => books.length;

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// make var for count of books borrowed
// loop through the books
// and pinpoint key "borrows" with its value which is an object find false for returned
// if false add to count
function getBooksBorrowedCount(books) {
  let countOfBooksBorrowed = 0;
  for (let book in books) {
    const { borrows } = books[book];
    if (borrows[0].returned === false) {
      countOfBooksBorrowed += 1;
    }
  }
  return countOfBooksBorrowed;
}

// create var for array
// filter through books to push genres to empty array
// create another var that will hold the reduce function to make the counter
// if genre is there += 1 if genre isnt there = 1
// create finalArr
// create for of loop with const naming [genre, count] and use Object.entries()
// push to finalArr with correct format
// sort it by highest
// needs top 5
function getMostCommonGenres(books) {
  let genre = [];
  books.filter((book) => genre.push(book.genre));

  let genreWithCount = genre.reduce((acc, index) => {
    if (acc[index]) {
      acc[index] += 1;
    } else {
      acc[index] = 1;
    }
    return acc;
  }, {});
  let finalArr = [];
  for (const [genre, count] of Object.entries(genreWithCount)) {
    finalArr.push({ name: genre, count: count });
  }
  finalArr.sort((a, b) => b.count - a.count);
  return finalArr.slice(0, 5);
}

// use the map method to create an array of books
// return the name of book and use .length to get how many times borrowed
// sort the results
// narrow the results to top 5

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

// use map method to create an array of authors
// within map method for count create helper function
// helper function would process the the number of times the author's books have been borrowed.
// helper function should match author.id to books.authorId
// if it matches count += borrows.length
// sort results
// narrow results to top 5
// set a var for count
// loop through books
// if book.authorId equals authors.Id increase count by borrows length

function _count(books, author) {
  let count = 0;
  for (let book of books) {
    // const { authorId } = book; to deconstruct line 52 if ever
    if (book.authorId === author.id) {
      count += book.borrows.length;
    } else {
      count += 0;
    }
  }
  return count;
}

// return books.reduce((acc, book) => {
//   let count = book.borrows.reduce((borrowAcc, borrow) => {
//     return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
//   }, 0);
//   return acc + count;
// }, 0);

function getMostPopularAuthors(books, authors) {
  return authors
    .map((auth) => {
      return {
        name: `${auth.name.first} ${auth.name.last}`,
        count: _count(books, auth),
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  console.log(authors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
