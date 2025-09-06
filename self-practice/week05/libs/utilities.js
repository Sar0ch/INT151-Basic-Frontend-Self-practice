//utilities.js

//named export
function echo(msg) {
  return msg
}
//default export
function getLength(str) {
  return str.length
}
const GPAAverage = 3.0
class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}

export { echo, getLength as default , GPAAverage, Book as BookManage }