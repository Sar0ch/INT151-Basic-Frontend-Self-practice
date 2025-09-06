//! #challenge
// Example usage
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];

const passingNames = getPassingNames(studentScores);
console.log(passingNames);  
// Output: ["ALICE", "BOB", "EVE"]

function getPassingNames(studentlist){
    return studentlist 
    .filter(student => student.score >= 70)     
    .map(student => student.name.toUpperCase());
}

/*  {
return 
        arr.filter (() => ___) กรองสิ่งที่ต้องการ
        .map (() => ___) เราจะใช้ map ในกรณีที่ต้องการแปลง value ใน array
}
 */

//? object.entry return เป็น array ที่มี key กับ value

console.log(Array.isArray([]))          // true
console.log(Array.isArray("a",12,false)) //  false ใช้ argument เกิน, จริง ๆ ฟังก์ชันนี้สนใจ arg ตัวแรกเท่านั้น → "a"
console.log(Array.isArray(new Array(2))) // true

console.log(Array.isArray("[]"))        // false (string ไม่ใช่ array)
console.log(Array.isArray(123))         // false (number)
console.log(Array.isArray([false]))     // true (array ที่มีค่า false ข้างใน)
console.log(Array.isArray("1"))         // false (string)
console.log(Array.isArray({}))          // false (object)

//!todo เอา array มาต่อกัน
const num1 = [1,2,3]
const num2 = [3,5,7]
console.log([...num1,...num2])          //spread
console.log(num1.concat(num2))          //concat

console.log(num1.toString())            //convert array to string data type
console.log(num1.toString())
console.log(num1.join("."))             //array to string with separator
console.log(num1.join(","))
console.log(num1.join(":"))
console.log(num1.join(" "))

const array14 = [1, 30, 4, 21, 100000]
array14.sort()
console.log(`array14: ${array14}`)
// expected output: Array [1, 100000, 21, 30, 4]

// ให้เรียงจากมากไปน้อย แล้วเรียงแบบ number
const array2 = [1, 30, 4, 21, 100000];
array2.sort((a,b) => b-a)
console.log(array2)

const students = [
  { id: 66500102, name: "Suda", gpa: 2.5 },
  { id: 66500555, name: "ada", gpa: 2.8 },
  { id: 66500589, name: "pornchai", gpa: 3.25 },
  { id: 66500102, name: "Pornsak", gpa: 3.8 }
];
// ให้เรียงลำดับชื่อตามตัวอักษร

const sorted = students.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA > nameB) return 1;
  if (nameA < nameB) return -1;
  return 0;
});

console.log(sorted);

// ย้อนเรียนตอน 2.20.00
/*
! ES Modules
! Tree shaking 
  - remove code ที่ไม่ได้ใช้ พวก deadcode unuse code หรือ code ที่ไม่ได้ถูกเรียกใช้ 
  - แล้วเราจะรู้ไดไงว่าโค้ดไหนไม่ได้ใช้ ถ้าไม่ได้ใช้ใน vs code มันจะมีสีเทาๆคลุมไว้ให้ แต่อันนี้เป็นของ edit ส่วนวิธีดูว่าอันไหนต้องใช้ Tree shaking 
  - วิธีเรียกใช้ 
    - ดูจากการ import อะไรที่ไม่ได้ import แล้วเป็น local scope ไฟล์ไหนจะใช้ต้อง import 
    - มันจะทำงานได้ดีใน local ถ้า
  ? ใน 1 ไฟล์ เรียกเป็น module 
*/

function echo(msg){

}
function getLength(str){
    return str.length
}
const GPAAverage = 3.0
module.exports = { echo , getLength }  //object syntax //{echo : echo}