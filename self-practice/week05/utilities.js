// utilities.js
function echo(msg) {
  return msg;
}

function getLength(str) {
  return str.length;
}

const GPA = 3.0;

class Book {
  constructor(isbn) {
    this.isbn = isbn;
  }
}

export { echo, getLength, GPA, Book };
