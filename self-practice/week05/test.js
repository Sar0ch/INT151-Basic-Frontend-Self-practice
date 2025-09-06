//1. transform individual export to export list and exporting Book class
//test.js
import getLenght , { echo as repeat, GPAAverage as GPA , BookManage} from "./libs/utilities.js"
// const { echo, getLength, GPA, Book } = require("./libs/utilities.js")
console.log(repeat("Today is a present"))
console.log(getLenght("JS  Beginner"))
console.log(GPA)
const b1 = new BookManage(1234)
console.log(b1)