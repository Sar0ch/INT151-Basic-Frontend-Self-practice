// ใช้ chat gpt สร้างโจทย์ให้
class Product {
    constructor(id , title , price){
        if(!d || price < 0) 
            throw new error("invalid product");
        this.id = id;
        this.title = title;
        this.price = price;
    }
    netPrice(){
        return this.price;
    }
}

// 🌟 ชุดโจทย์ฝึก
// arrays-practice.js

// 1) ใช้ filter() หาผลไม้ที่ชื่อยาวเกิน 5 ตัวอักษร
console.log("=== 1) FILTER: ชื่อผลไม้ยาวเกิน 5 ตัวอักษร ===")
const fruits = ["apple", "mango", "pineapple", "pear", "banana"]
const longfruits = fruits.filter(f => f.length > 5)
console.log(longfruits)

// 2) ใช้ map() แปลงชื่อ student เป็นตัวพิมพ์ใหญ่
console.log("\n=== 2) MAP: ชื่อ student เป็นตัวพิมพ์ใหญ่ ===")
const students = [
  {id:1, name:"Somchai"},
  {id:2, name:"Suda"},
  {id:3, name:"John"}
]
const upperStu = students.map(s => s.name.toUpperCase())
console.log(upperStu)


// 3) ใช้ find() หานักเรียนที่ id = 2
console.log("\n=== 3) FIND: หา student ที่ id = 2 ===")
const findStu = students.find(s => s.id === 2)
console.log(findStu)

// 4) ใช้ reduce() คำนวณยอดรวมตะกร้าสินค้า
console.log("\n=== 4) REDUCE: คำนวณยอดรวมตะกร้า ===")
const cart = [
  { product: "pen", price: 5, qty: 10 },
  { product: "book", price: 50, qty: 2 },
  { product: "eraser", price: 3, qty: 5 }
]
const total = cart.reduce((sum,item) => sum + item.price * item.qty, 0)
console.log('ยอดรวมตะกร้า : ',total , "บาท")

const net = total * 1.07
console.log("ราคารวมทั้งหมด(net) : ", net)

// 5) ใช้ push/pop จำลอง stack และ shift/unshift จำลอง queue
// Stack (LIFO)
console.log("\n=== 5) STACK / QUEUE ===")
const stack = []
stack.push("book A")
stack.push("book B")
stack.push("book C")
console.log("stack after push:", stack)
console.log("pop ->", stack.pop()) 
console.log("stack after pop:", stack)

// Queue (FIFO)
const queue = []
queue.push("cust1")
queue.push("cust2")
queue.push("cust3")
console.log("queue after enqueue:", queue)
console.log("dequeue (shift) ->", queue.shift()) 
console.log("queue after dequeue:", queue)

// 6) ใช้ splice() ลบ "green" ออกจาก array และเพิ่ม "pink" หลัง "blue"
console.log("\n=== 6) SPLICE: ลบ green และเพิ่ม pink หลัง blue ===")
const colors = ["red","green","blue","yellow"]
const greenIdx = colors.indexOf("green")
if (greenIdx !== -1) colors.splice(greenIdx, 1)

const blueIdx = colors.indexOf("blue")
if (blueIdx !== -1) colors.splice(blueIdx + 1, 0, "pink") 
console.log(colors)

// 7) ใช้ slice() เอาเฉพาะตัวเลข index 2 ถึง 4
console.log("\n=== 7) SLICE: index 2 ถึง 4 ===")
const nums = [1,2,3,4,5,6,7]
const part = nums.slice(2, 5)
console.log(part)

// 8) ใช้ includes() ตรวจว่ามี "orange" อยู่ใน array นี้หรือไม่
console.log("\n=== 8) INCLUDES: มี orange ไหม ===")
const arr = ["apple","mango","banana"]
console.log("has orange ?", arr.includes("orange"))
console.log("has apple ?", arr.includes("apple"))
