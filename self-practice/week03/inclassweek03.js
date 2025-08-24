//! #challenge
function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined)   //check sentence   ใน if ต้องคืนค่า type เป็น boolean 
                                                    // (!sentence) อันนี้เป็น fa
    return undefined

  const words = sentence.toLowerCase().split(" ")   //  ทำให้ sentence แล้ว split ให้string เป็น array
  const frequen = {}        //โจทย์ตั้งการให้ output เป็น object เลยใช้ {} คลุม

  for (let word of words) {     //ใช้ for loop เพื่อเช็ค คำแต่ละคำ
    if (frequen[word]) {
      frequen[word] += 1
    } else {
      frequen[word] = 1
    }
  }

  return frequen
}


console.log(getFreqOfWords("Today is present and present is your gift"));
console.log(getFreqOfWords("Do you best just do it"));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));

 //!----------------------------------------------------

function plus(num1, num2) 
{ return num1 + num2; } 
let result = plus(5, 7); 
console.log("number 1 + number 2 = ", result);

//1.function declaration
function sum(a,b){
    return a + b
}
sum(1,2)        //function ทำงานแล้วแต่ไม่ได้เรียกค่าที่ไว้เก็บตัวแปล
const x = sum
console.log(x(1,2))     //3

//2 function expression (arrow syntax)
const sum2 = () => a+b  // auto return
//แต่ถ้าใส่ {} ที่ => ต้อง return

//3.function expression (annonymousfunction)
const sum3 = function(){
    return a + b
}
//


function add(a, b) {       //สร้างfunction ปกติ รับค่า a,b
  return a + b             
}

function callAdd(x, y) {    //creat new function input parameter x,y
  return add(x, y)          //call function add by use x,y
}

console.log(callAdd(5, 3)) //

function greet(name, call) {
    return call(name);
}
function greetHello(n) {
    return "Hello, " + n;
}
console.log(greet("Parinda", greetHello));


function Test(x) {
    return x 
}
function Test2(x) {
    return x + 50
}
 
console.log(Test(Test2)(10));//console.log(Test2(10))

//!03.03.03 arrow function

// function square(n) {
//   return n * n
// }

// arrow function
const square = n => n * n

//! 03.20. ย้อน argumnent
function doSomething(a,b,...c){
    console.log(`length: ${arguments.length}`)  //arguments เก็บ ค่าพารามิเตอร์ทั้งหมดที่ส่งเข้ามาในฟังก์ชัน
                                                //ใช้ได้ใน function ปกติ เท่านั้น
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(a,b,c)
}
doSomething(1,2,3,4,5,6,78,9)

function sum(...number){
    let count = 0
        for ( i of arguments){
        let number = 2
        count +=i}
    return count
}
 
console.log(sum(1,2,3,4,5,6,7,8,9))
console.log(sum())

function sum(...a) {
let result = 0
for (let i of arguments) {
    result += i
}
return result
}
console.log(sum())
console.log(sum(1))
console.log(sum(1,2))
console.log(sum(1,2,3,5))