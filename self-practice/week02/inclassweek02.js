// #challenge

function TotalPages(items,itemsPerPages){
    if (itemsPerPages <= 0 || items === null) 
        throw new Error ('Items per page must be greater than zero ');      //
    return Math.ceil(items/itemsPerPages)           //math.ceil
}

console.log(TotalPages(12,2))

// + คือ binary op ต้องใช้จาก operand ถ้ามี string อย่างน้อย 1 ตัวจะเป็น concat ถ้าเป็น number ทั้งคู่ จะเป็น บวก แบบ number

//! ------------------------------------------------------------------
/* เผื่อลืม
const student = {
  id: 1,           // key = "id"      , value = 1
  name: "Somchai", // key = "name"    , value = "Somchai"
  age: 20          // key = "age"     , value = 20
   */
//! ------------------------------------------------------------------

/* วิธีสร้าง Object มี 4 แบบ
!1 Object literals 
-สร้างง่าย อ่านง่าย
-ถ้าต้องสร้างหลาย object ที่มีโครงสร้างเหมือนกัน เราต้องเขียนโค้ดซ้ำๆ 
*/

const book = {isbn : 123 , isbn :1244}      //object ไม่ควรมีคีย์ซ้ำ แต่ถ้ามีคีย์ซ้ำจะเอาตัวสุดท้าย 
                        //object ไม่มี order 
                        //object สามารถประกอบด้วย obj ซ้อนกันได้
//obj ซ้อนกัน  belike :
const student = {
  name: "Bhiraphat",
  moreinfo: {
    nickname: "Peem",
    no: 1 ,
    men: true,
    money: undefined,
    null:null,
    array:[1,2,3],
    Math:1+1,
    hello(){return "mafaq"}
  }
};
console.log(student.moreinfo.hello()) // เจาะเข้าไปใน function

//todo-------------------------------------------------------------------------

/*
!2 Constructor functions
-สร้างหลาย object ที่มีโครงสร้างเดียวกันได้ง่าย
-ต้องใช้ this และ new ซึ่งถ้าใช้ผิดจะเกิดบั๊กง่าย
*/
function Car(type, model, color) {
    this.type = type;
    this.model = model;
    this.color = color;
}


/*
!3 ES6 Class
-ถ้าต้องการสร้างหลาย obj ที่แชร์ทุก obj ควรสร้างเป็น class
-อยากใช้ฟังก์ชั่นเดียวกันเเชร์ทุก obj ควรสร้างเป็น class
 */
class Student{
    constructor(firstName,lastName,age){
        this.firstName = firstName      // ฝั่งขวาคือ parameter   ส่วนฝั่งซ้ายจะย้ายไปเป็น properties ที่มี this  นำหน้า
        this.lastName = lastName
        this.age = age
    }
}
 
const jacky = new Student("jack","ky",19)
console.log(jacky)

/*

 constructor(firstName,lastName,age)
                firstname นี้จะไปเก็บใน properties firstname ข้างล่าง
this.firstname = firstname
this.lastName = lastName
this.age = age
ไอที่อยู่หลัง = จะเก็บค่า parameter ที่ข้างบนส่งลงมา
ส่วนตรงที่มี this จะย้ายไปเป็น properties ของ objects
*/


/*
!4 Object.create (exiting system)
-สามารถกำหนด prototype ของ object ได้ตรง ๆ โดยไม่ต้องสร้าง class หรือ constructor
-เหมาะกับเวลาที่เรามี object ต้นแบบอยู่แล้ว → อยากสร้าง object ใหม่ที่ “สืบทอดคุณสมบัติ” โดยตรง
 */

const jackyStudent = Object.create(jacky)
console.log(jackyStudent.firstName)
console.log(jackyStudent.lastName)
console.log(jackyStudent.age)
jackyStudent.jackyStudentId = 67130546465
console.log(jackyStudent)
//todo-------------------------------------------------------------------------


//1. Object literal 
const per1  = {firstName: 'Saroch',lastName: 'Pimnoi', age: 20}
console.log(per1.firstName) //object,property   (เหมาะกับ key ที่ชื่ออ่านง่าย ไม่มีช่องว่าง)
console.log(per1["lastName"])   //object["property"] (เหมาะกับ key ที่เป็น string แปลก ๆ หรือมาจากตัวแปร)

//for...in
for(const key in per1){
    console.log(key)    // ชื่อ property (firstName, lastName, age)
    console.log(per1[key])  // ค่า value ('Saroch', 'Pimnoi', 20)
}

/*
how to compare Obj
1.ใช้ === ควรเช็คทั้ง type และ value เลี่ยง == object.js()เช็ค value เหมือนกัน
    object มันเก็บ reference ไปยัง memory address ของ object
 */

const std1 = {id: 1, name: "Somchai"}   //std1 ไม่ได้เก็บ value ที่เป็น key กับ value แต่เก็บ reference คือ 
                                        // การเก็บ memories address คือ location ของข้อมูล แต่มันไม่ได้เก็บข้อมูลโดยตรง เพราะ value เก็บได้ค่าเดียว
const std2 = {id: 1, name: "Somchai"}   // std1 กับ std2 เก็บค่า address คนละตัวแค่มี key value เดียวกัน

console.log(std1===std2)            //ไม่เท่ากันเพราะมันเปรียบเทียบ reference ไม่ใช่ค่าข้างใน
console.log(Object.is(std1,std2))   // เป็น function ไว้ compare 2 parameters
                                    //ความต่างของ Object.is() กับ === จะเห็นตอนเจอ NaN, +0, -0

//alias ใน memory address มีค่ามากกว่า 1 ตัวแปร

function dosomething(obj){
    obj = {id:1 , name:'yoyo'}   // สร้าง object ใหม่ แล้ว assign ให้ obj (เฉพาะในฟังก์ชันนี้)
    obj.name = 'xxx'            // แก้ property ใน object ใหม่

}
const pet = {id: 1, name:'yoyo'}
console.log(pet.name)   //yoyo
dosomething(pet)    // เรียก function dosomething
console.log(pet.name)   //yoyo

/**
 2. Manual Comparison
 - ถ้าใช้ == , === , object.is ก็ไม่ได้เราต้องเรียนโปรแกรมเอง
 */

//create compareStudent function to compare two students 
//if id and name are equally with incase sensitive then they are the same student, otherwise they are different.
//incase sensitve = ไม่อ่อนไหว A,a เหมือนกัน

const std01 = { id: 1, name: "Somchai" }
const std02 = { id: 1, name: "Somchai" }
const std03 = { id: 2, name: "Somchod" }

function isStudentEqual(object1, object2) {
return object1.id === object2.id && object1.name === object2.name
}
console.log(isStudentEqual(std01,std02))    //  true
console.log(isStudentEqual(std01,std03))    //fasle

function comparestu(object1,object2){
    if(object1.id === object2.id && object1.name.toLowerCase() === object2.name.toLowerCase())
        return true
    else
        return false
}
console.log(comparestu(std01,std02))    //  true
console.log(comparestu(std01,std03))    //fasle

/**
 3. Shallow Equality
 - การเปรียบเทียบ object หรือ array โดยดูแค่ ค่าที่ระดับผิว (properties ชั้นแรก) ไม่ได้ลงไปตรวจเช็คค่าที่อยู่ซ้อน (nested) ข้างใน
 */
let book1 = {
  isbn: 123456789,
  title: "JavaScript",
}

let book2 = {
  isbn: 123456789,
  title: "JavaScript",
}
//ถ้าใช้ === → จะได้ false เพราะ object คนละ reference
//แต่ถ้าใช้ shallow equality function → จะได้ true เพราะ properties ชั้นแรกตรงกัน

function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1)    //ดึงชื่อ property (key) ทั้งหมดของ object ออกมาเป็น array
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let key of keys1) {      //เช้คทีละ key
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}

/*
JSON - เป็น text format หนึ่ง วิธีดูคือถ้าเปิดด้วย text editor อ่านรุ้เรื่องแปลว่าอันนั้นคือ text format html py ด้วย
ไว้แลกเปลี่ยนข้อมูลกับ server ด้วย json 
JSON กับ js.object ต่างกัน ยังไง
- JSON ต้องใช้ " " ใส่ใน key ตั้งใส่ทุกครั้ง
-value ที่เก็บใน js.obj เก็บ primitive , array , object ,function แต่ JSON เก็บ function ไม่ได้
stringify() : convert jsobject เป็น JSON string
วิธีcompare jsobject to JSON strings แปลงเป็น JSON ทั้งหมด แล้วเทียบ strings

เช็คว่า object empty ไหม
- converts to stringify
*/ 
const emptyObj = {}
if (JSON.stringify(emptyObj) === '{}') {
  console.log('1.emptyObj is empty object')
}
/*
อีกวิธี
- Object.keys() - คืน array ของชื่อ property
*/ 
const std011 = { id: 1, name: "Somchai" }
const std021 = { id: 1, name: "Somchai" }

console.log(Object.keys(std011))//['id' , 'name']
console.log(Object.values(std011)) //[ 1, 'Somchai' ]

/**
 spread(...) in object
 - ถ้าใช้ ...obj → จะดึง property ทั้งหมดของ obj มาใส่ใน object ใหม่
 - ใช้สำหรับ clone (ก็อปปี้ตื้น ๆ = shallow copy)
 - ใช้สำหรับ merge object หลาย ๆ ตัวเข้าด้วยกัน
 - ถ้ามี key ซ้ำกัน → ค่าอันหลังสุดจะ replace (ทับ) ค่าอันก่อนหน้า
 */

const obj1 = { foo: 'bar', x: 42 }
const obj2 = { foo: 'baz', y: 13 }

// 1) Clone object
const clonedObj = { ...obj1 }
// ผลลัพธ์: { foo: "bar", x: 42 }
// ได้ object ใหม่ที่ copy มาจาก obj1

//2) Clone + Replace
const clonedWithReplace = { ...obj1, foo: 'abc' }
// ผลลัพธ์: { foo: "abc", x: 42 }
// ถ้าเจอ key ซ้ำกัน → ค่าที่มากหลังสุดจะ ทับค่าเดิม

// 3) Merge 2 objects
const mergedObj = { ...obj1, ...obj2 }
// ผลลัพธ์: { foo: "baz", x: 42, y: 13 }
// เวลา merge obj1 + obj2 → ถ้ามี key ซ้ำกัน (foo) ค่าของ obj2 จะมาแทน

/*
Object Destructuring - ใช้เยอะมากในการเขียน app 
- แยกโครงสร้าง
- สังเกตจาก {} , [] 
จากเขียนยาวๆยุบเหลือบรรทัดเดียว 

ตอน Destructuring ใน array ใช้คุณสมบัติ
- order เพราะ object ไม่มีลำดับมีแต่ keys ตอนแยกโครงสร้างต้องระบุ keys 
 */

const stdd = {id:1 ,name: "Somchai", address: {no:111, city: "Bangkok"}}
let {name : fullName, id } = stdd   //Object Destructuring สังเกตจาก {} 
                                    // ดึงแล้วเปลี่ยนชื่อเป็น fullName

console.log(fullName) // "Somchai"
console.log(id)       // 1

let { address: { city: myAddress } } = stdd  //city: myAddress = ดึงค่า city แต่เอาไปเก็บไว้ในตัวแปรชื่อ myAddress
console.log(myAddress) // "Bangkok"

