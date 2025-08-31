//Arrays Methods
/*
anonymous function - ฟังก์ชันที่ไม่มีชื่อ ไว้ใช้กับฟังค์ชั่นที่ใช้ครั้งเดียว ต้องการสร้างแล้วใช้งานแบบไม่มีชื่อ พวก arrays function รู้จักแค่ครั้งเดียวอ้างถึงกันไม่ได้อีก
มีประโยชน์ในการใช้งานครั้งนั้น ไม่มีขื่ออ้างถึง

ตัวอย่่าง
anonymous function created as a fucntion expression

    function(){ }

anonymous function created as a arrow fucntion 

    () => {}
------------------------------------------------
    ?array function ส่วนใหญ่เป็น higher order function คือ fnที่รับfnเป็น parameter
    parameter คือ ช่องที่ไว้รับค่า เหมือนกล่องจดหมาย word คือ parameter เพราะรับค่ามาจาก  word.length > 6
    argument คือ ค่าที่เอามาใส่ จดหมายที่เอามาใส่กล่อง ['spray', 'limit'] arguments ที่ถูกส่งเข้ามาจาก array

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);       filter() = ฟังก์ชันหลัก (higher-order function)
                                                        parameter ของ filter = ฟังก์ชันอีกตัว (callback) → (word => word.length > 6)
                                                        word = parameter ของ callback (เป็นกล่องไว้รับค่าแต่ละ element)
                                                        element ใน array เช่น "spray", "limit" = argument ที่ถูกส่งเข้าไป
                                                        !filter จะวนทีละตัว เอา element ส่งเข้าไปใน callback แล้วเช็ค true/false
    console.log(result);

    expected output: Array ["exuberant", "destruction", "present"]
    
    ถ้าใช้งาน function นั้นบ่อย สามารถเอามาสร้างเป็นฟังก์ชั่นแยกก็ได้ จะเเล้วค่อยอ้างชื่อ จะเป็น arrow หรือ declar 
    ถ้าอ้างชื่อเเล้วไม่ต้องเอาวงเล็บไปใส่แล้วเพราะอ้างเเค่ชื่อไม่ได้จะให้ประมวลผล

    จะให้ filter อ้างถึง filter( wordlenght) ตรงนี้ไม่ต้องใส่()แล้ว เพราะยังไม่ไ้ดเรียกให้ประมวลผลทันที
    สมมติมี function wordlenght (){ }
    
*ตรงข้ามกับ

ืืnamed function - ถ้ามีโอกาสต้องเรียกใช้บ่อยๆ ควรตั้งชื่อ
    
fucntion declarations

    function foo() {}

Names function expression

    const barFn = function bar(){}          อ้างผ่าน barfn เป็นชื่อ function

------------------------------------------------------------------------------

todo array iterator method 
    คือพวกเมธอด (methods) ของ Array ที่ใช้ในการ วนลูปทำงานกับสมาชิกแต่ละตัว 
    โดยจะให้เราส่ง callback function เข้าไป แล้วมันจะทำงานกับ element แต่ละตัวให้เอง
    พวกนี้จะเข้าไป visit แต่ละไอเทมใน array เพื่อตัดสินใจบางอยางตามหน้าที่ของฟังก์ชัน
    
    foreach()เพื่อวนลูป คล้ายๆ for i แต่ใช้กับ array
        -เขียนอธิบาย callback function ที่ต้องการให้ทำซ้ำ 
        -คลุมจำนวนลูป 
        -ไม่มี return


    map()เพื่อเปลี่ยน value ของ ไอเทมนั้น
        -map อธิบายว่าต้องการเปลี่ยน value ของ item เป็นอะไร
        -map ถ้าใช้กับ object เราสามารถระบุที่ property ของ object ที่เราต้องการ
        -callback ของ map ต้อง return ค่าใหม่ออกมา
    filter()กรองไอเทมนั้นออกมา
        -callback function ใน filter ต้อง return ค่าออกมาเป็น boolean เสมอ ถ้าไม่ได้ T F จะตัดสินใจไม่ได้ ว่าจะเอาอะไรเข้าออก
        -ต้องรู้เงื่อนไขที่เราจะคิด 
        -หาได้ทุกค่าที่ต้องการไม่ได้เอาแค่ตัวเเรกที่เจอ

    find()หาไอเทม
        -callback funtion แค่ first element แรกที่ตรงกับเงื่อนไช ต้องได้ผล T F ถ้าเจอแล้วจะหยุดหา ถ้าไม่เจอก็จะ undefined
        -callback fucntion ใส่เงื่อนไข

    findIndex()เข้าไปหาไอเทมนั้นใน index
        -หา index ของไอเทมว่าตรงตามเงื่อนไขไหม ถ้าไม่ตรงจะคืนค่า -1 ถ้าเจอคืนตำเเหน่งที่เจอ

    every() and some() ตรวจสอบว่าทุกไอเทมตรงตามเงื่อนไขมั้ย หรืออย่างน้อย 1 ไอเทมมั้ย return เป็น boolean ไม่ได้ return array
        - every = for all ต้องเข้าเงื่อนไขทุกตัวถึงจะเป็น T
        - some = for some ถ้าเข้าเงื่อนไขอย่างน้อย 1 ตัว เป็น T

    reduce() ลดค่า
        - ยุบค่าจาก array ทั้งก้อนเป็น 1 เดียว ตรงcallback ให้เขียน how to ลดค่า
        - วิธียุบ string หลายตัวใน array 
        - ถ้าเราไม่เซต initial value จะเริ่มที่ตัวเเรก


*Stack and Queue Methods 
    🥞 Stack (กอง)
    👉 หลักการ LIFO (Last In First Out) = เอาเข้าอันล่าสุด ออกก่อน เข้าarray ทีหลังแต่ออกก่อน
    
    📦 Queue (คิว)
    👉 หลักการ FIFO (First In First Out) = เข้าก่อน ออกก่อน 

    push() เพิ่มข้อมูลเข้าไปใน array (ถ้าจะเพิ่มแบบไม่ใช้ push ให้เพิ่มแบบ arr.length)
    pop()  ลบข้อมูลท้าย array (คืนค่าตัวที่ถูกลบด้วย)
    สองอันนี้ทำงานที่ท้าย array

    unshift()
    shift()
    ทำงานที่ต้น array

    shift = pop คือ remove item ใน arrays ต่างกันแค่ต้น
        -remove ต้น array length ลดลง shiftหาย
    unshift = push คือ add item เข้า arrays
        -เพิ่มที่ต้น array size เพิ่มขึ้น 1

*Subarray Methods 
    เอาไว้ใช้แยกกลุ่ม arrays 
    
    slice() ตัดบางส่วน
        -บอกจุดเริ่มต้นถึงจุดสิ้นสุด (ตัดตามตำแหน่ง, ตำแหน่งนี้จะไม่ตัด) เช่น .slice(2,4) ก็จะตัดตั้งเเต่ 2,3 แต่จะไม่ตัด 4
                                                        ถ้าติดลบจะเริ่มจากตัวท้าย
                                                        ถ้า(2,-1) end < 0 → เอา end + length มาคิดแทนตำแหน่งจริง

*   splice() ทำได้หลายอย่างเลย add remove replace ได้หมดเลย    splice()	ตัด–แทรก–ลบ array	
        -let arrDeletedItems = arr.splice(start[, deleteCount[, item1[,item2[,...]]]])
        deletecount = 0 หรือ negative จะไม่ remove 
                    = 1 ลบ 1 ตัว >1 ลบตามจำนวน
                ถ้าอยากเพิ่ม ( ตำแหน่ง , 0 ไม่ลบ , ใส่ที่ต้องการเพิ่ม)
                ถ้าอยากแทนที่ ( ตำแหน่ง , 1 หรือมากกว่า ก็จะลบตามจำนวนที่ต้องการ , ใส่ที่ต้องการเเทนที่)
        start เลขตำแหน่ง index 0 ตัวเเรก 1 ตัวที่สอง
        .splice(1,0, สิ่งที่เราต้องการเพิ่ม)
        .splice(1,1, สิ่งที่เราต้องการแทนที่)

    fill() เติมค่าเดิมๆ ลงใน array ตามช่วงที่กำหนด
        - เติมค่าตามตำแหน่งที่ระบุ 
        - arr.fill(value , start, end)
        -fill(v) → เติมทั้ง array
        -fill(v, s) → เติมจาก index s ถึงท้าย
        -fill(v, s, e) → เติมจาก s ถึงก่อน e

*Searching and Sorting Methods
    ค้นหาหรือจัด array

    indexOf() หาindex
    includes()  มีไอเทมนั้นใน array มั้ย
        -ไว้
    sort()  เรียงลำดับ
    reverse()  กลับด้าน array จากท้ายมาหน้า จากหน้ามาท้าย

*Array to String Conversion
    
    join()เปลี่ยน array เป็ร string
 */

//filter function does not change an original array
const words = ['mango','apple','mangosteen','orange']

//1.anonymous arrow function ในรูป callback
// const shortsWords=words.filter((word)=>word.length <= 6) 

//2.annonymous function declaration
// const shortsWords=words.filter(     function(word){
//     return word.length <= 6
// }   )   //ใ้ชfunction ครั้งเดียวเลยไม่่ต้องใส่ชื่อ function ก็ได้


//3. reuse callback function (named function)
function wordLength(word) {
  return word.length <= 6
}
console.log('ตรงนี้ไม่แก้ array เริ่มต้น')
const shortWords = words.filter(wordLength)
console.log(words)
console.log(shortWords)
//sort function changes original array
console.log("ตรงนี้จะเปลี่ยนค่า array original")
const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

console.log('--------------------------------------')
// map()เพื่อเปลี่ยน value ของ ไอเทมนั้น
    //ให้เปลี่ยนคำของ word เป็นตัวพิมพ์ใหญ่

console.log('การใช้ map')
const upper = words.map(word => word.toUpperCase());

console.log('โจทย์ : ' , words)
console.log("ใช้ map ทำให้เป็นพิมพ์ใหญ่ : ", upper)

//notes
// toLocaleUpperCase() / toLocaleLowerCase() → ตัวอักษรพิมพ์ใหญ่/เล็ก ตามกฎของภาษา
// console.log("istanbul".toLocaleUpperCase("tr-TR")); // İSTANBUL (ภาษาตุรกีมีตัว İ พิเศษ)
// console.log("istanbul".toUpperCase());              // ISTANBUL (ภาษาอังกฤษปกติ)

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]
const map2 = students.map(student => student.id);
console.log(map2);

console.log("เอาแต่students id :" , students.map(students => students.id))
console.log("เอาแต่students id ที่เป็นเลขคู่ (แบบ functional) :" , students.filter((students) => students.id % 2 === 0 ))
//แบบง่าย
const id = students.map(students => students.id)
const idkoo = id.filter((students) => students % 2 === 0)
console.log(idkoo)

//return all words that include 'mango' (ignore case) ไม่สนใจตัวพิมพ์เล็ก–พิมพ์ใหญ่
//result ['Mango', 'mangosteen', 'mangoes']

const words2 = ["Mango", "Apple", "mangosteen", "orange","mangoes"];
const found = words2.filter( w => w.toLowerCase().includes('mango'))
console.log(found)

//includes() -> array เช็คทั้งไอเทม
console.log(words2.includes("Apple")) //true 
console.log(words2.includes("apple")) //false
console.log(words2.includes("app")) //false 

// includes() ->string เช็คบางส่วนที่เหมือน
// const sentence = "The quick brown fox jumps over the lazy dog."
// const word = "Ox"
// console.log(sentence.includes(word))
 
//check array that has word "apple" (ignore case)or not if has display "has apple"
//otherwise, display "does not have apple"

// const words2 = ["Mango", "Apple", "mangosteen", "orange","mangoes"];
//แบบยาว
const cases = words2.map( wo => wo.toLowerCase())
if(cases.includes('apple')){
    console.log('has apple')
}
else {
    console.log('does not have apple');
}
//แบบรวมมาเลย
if(words2.map(w=>w.toLowerCase()).includes("apple")){
  console.log("has apple");
}else{
  console.log("does not have apple");
}

//reduce
const product = [1, 'RED', 102]
const productDetail = product.reduce((detail, prop) => {    //(ตัวแปรที่เราสะสม , ตัวไอเทมแต่ละรายการที่เราvisit แต่ละอันใน array)
return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
}, '') //1R102
console.log(productDetail)
// ‘’ คือ initial value = ค่าตั้งต้นของตัวสะสม (accumulator) ใน reduce()

const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]
//find cart total and return object that show the total {total: 1080}
const total = cart.reduce((acc, cur) => {
  return { total: acc.total + (cur.price * cur.quantity) };
}, { total: 0 });

console.log(total);


// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3


const words3 = ["Mango", "Apple", "mangosteen", "orange","mangoes"];
//replace "mangosteen" with 'banana'
words3.splice(2,1,'banana'  )
console.log(words3)
//remove the last two words
words3.splice(3,2)
console.log(words3)
//add 'melon' and 'cherry' after 'Apple'
words3.splice(1,0,'melon','cherry')
console.log(words3)


const words4 = ["Mango", "Apple", "mangosteen", "orange","mangoes"];

//slice items at index 2 to last
console.log(words4.slice(2))

//slice the first to third
console.log(words4.slice(0,3))

//fill null to all items
console.log(words4.fill(null))

console.log(" ")
console.log(" --------------------------------- ")
console.log(" ")

const wordd =["apple", "Mango", "orange", "Banana"]
// wordd.reverse() //[ 'Banana', 'orange', 'Mango', 'apple' ]
// 1.annonymous arrow function
const startAword = wordd.filter( wordd => wordd.startsWith('a'))    //จะทำงานไปเรื่อยๆตามจำนวนของ wordd
console.log("1.annonymous arrow function : ",startAword)

//2.annonymous function declaration
const startAword1 = wordd.filter(function (word) {
    return word.startsWith("a")
})
console.log("2.annonymous function declaration :  ",startAword1)

//3.named arrow funciton
const checkStartA =(word)=> word.startsWith("a")
const startAword2 = wordd.filter(checkStartA)
console.log("3.named arrow funciton : ",startAword2)

//4.named function declaration
function checkStartA2(word){
    return word.startsWith("a")
}
const startAword3 = wordd.filter(checkStartA2)
console.log("4.named function declaration : ",startAword3)

const worddd =["apple", "Mango", "orange", "Banana"]

const employees = [
  {
    id: 'e1001',
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: 'e1002',
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: 'e1005',
    firstname: "Suda",
    lastname: "Rakdee",
  },
]
 
//output ['SOMCHAI JAIDEE' , 'PORNCAHI DEEJAI' , 'SUDA RAKDEE']
const map1 = employees.map(employee => employee.firstname + " " + employee.lastname)
const up = map1.map(emp => emp.toUpperCase() )
console.log(up)



const fullName = [];
employees.map(name => {
    fullName.push(`${name.firstname.toUpperCase()} ${name.lastname.toUpperCase()} `) // ใช้แบบ string concat ใช้ `${ }`
})
const filterName = fullName.filter(nameJai =>
    nameJai.toLowerCase().includes('jai')
)
console.log(filterName);
 
const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]

const totall = carts.reduce((acc, cur) => {
  return { total: acc.total + (cur.price * cur.amount) };
}, { total: 0 });

const result = totall.total
const netprice = (totall.total * 1.07).toFixed(2)
console.log("total : " , result)
console.log("net price : " , netprice)

const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)

const word5 = ["apple", "orange" ,"banana"]
//add 'cherry after 'orange'
word5.splice(2 , 0 , "cherry", "berry")
console.log(word5)

//delete 'cherry
// [ 'apple', 'orange', 'cherry', 'berry', 'banana' ]
word5.splice(2 , 1)
console.log(word5)

// [ 'apple', 'orange', 'berry', 'banana' ]
//replae 'berry' with 'mango'
words.splice(2,1,"mango")
console.log(word5)
