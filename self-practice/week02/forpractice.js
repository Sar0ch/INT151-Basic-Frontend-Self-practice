/**
 3. Shallow Equality
 - การเปรียบเทียบ object หรือ array โดยดูแค่ ค่าที่ระดับผิว (properties ชั้นแรก) ไม่ได้ลงไปตรวจเช็คค่าที่อยู่ซ้อน (nested) ข้างใน
 */
//ใช้ chatgpt สร้างโจทย์ 
// ให้เขียนฟังก์ชัน isSameProduct(p1, p2) เพื่อตรวจสอบว่า สินค้าสองตัวคือสินค้าชนิดเดียวกัน
// โดยพิจารณาเฉพาะ productId และ price เท่านั้น

function isSameProduct(p1, p2) {
  return p1.productId === p2.productId && p1.price === p2.price
}

const product1 = { productId: "X123", name: "Keyboard", price: 500 }
const product2 = { productId: "X123", name: "Gaming Keyboard", price: 500 }
const product3 = { productId: "X124", name: "Mouse", price: 300 }

console.log(isSameProduct(product1, product2)) // true
console.log(isSameProduct(product1, product3)) // false

// 1.โจทย์ง่าย (For loop + Array)
// เขียนฟังก์ชัน printEven(numbers) ที่รับอาร์เรย์ของตัวเลข แล้วพิมพ์เฉพาะเลขคู่ทั้งหมดออกมา
function printEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {   
            console.log(numbers[i]);
        }
    }
}
printEven([1, 2, 3, 4, 5, 6]);  

// 2.โจทย์ปานกลาง (Object + Function)
// ให้สร้างฟังก์ชัน findStudentById(students, id) ที่รับอาร์เรย์ของ student objects และ id ที่ต้องการค้นหา แล้ว return student ที่ตรงกับ id นั้น
function findStudentById(students, id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }
    return null;
}
const students = [
    { id: 1, name: "March" },
    { id: 2, name: "Emi" },
    { id: 3, name: "John" }
];
console.log(findStudentById(students, 2)); 

// 3.โจทย์ยาก (Arguments + Rest + For Loop)
// เขียนฟังก์ชัน sumAll(...nums) ที่ใช้ rest parameter เก็บค่าทั้งหมด และใช้ for-loop (หรือ arguments) ในการหาผลรวมตัวเลข

function sumAll(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5)); 

// 4. Shallow Equality (ง่าย)
// เขียนฟังก์ชัน isSamePerson(p1, p2) ที่ตรวจสอบว่า object สองตัวเป็น “คนเดียวกัน” หรือไม่ โดยพิจารณาเฉพาะ id และ name เท่านั้น

function isSamePerson(p1, p2) {
    return p1.id === p2.id && p1.name === p2.name;
}

console.log(isSamePerson({id:1, name:"March"}, {id:1, name:"March"})); 
console.log(isSamePerson({id:1, name:"March"}, {id:2, name:"Emi"}));   

// 5. Shallow Equality (ปานกลาง)
// เขียนฟังก์ชัน isShallowEqual(obj1, obj2) ที่ตรวจสอบว่า object ทั้งสองมี key และ value ชั้นแรกเหมือนกันทุกตัว หรือไม่

function isShallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isShallowEqual({a:1,b:2}, {a:1,b:2})); 
console.log(isShallowEqual({a:1,b:2}, {a:1,b:3})); 

// 6. Array + Function (ทั่วไป)
// เขียนฟังก์ชัน findMax(numbers) ที่รับอาร์เรย์ของตัวเลข แล้ว return ค่าที่มากที่สุด โดยใช้ for-loop

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(findMax([3, 7, 2, 9, 5]));