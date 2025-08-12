//1. Create array with many data type
const x = [1,"d",3,4,5,6,7,"stwed",true]
//2. print array size
console.log("2 :" ,x.length)
//3. print the first item
console.log("3 :" ,x[0])
//4. print the last item
console.log("4 :" ,x[(x.length)-1])
//5.add two more at the end of array with object and array data type respectively
x.push(['ffe'])
console.log("5 :" , x )
//6. print every item in the array
for(let i = 0 ; i < x.length ; i++)
    console.log("6 :",x)
//7.
console.log("7 :" ,x.splice(3))
//8. apply spread on string 
let str =('Csharkwow')
const strCH = [...str]
console.log("8 :" ,strCH)
//9. create array with new constructor
const arr1 = new Array()
console.log("9.1 : ",arr1)
const arr2 = new Array(5)
console.log("9.2 : ",arr2)
const arr3 = new Array(1,2,3,4)
console.log("9.3 : ",arr3)
const arr4 = new Array(1,2,3,4)
console.log("9.4 : ",arr3)
const str2 = Array.from(str)
console.log("9.5 : ",str2)

//! นิพจน์ คือสิ่งที่มี value ในตัวมันและต้องให้ออกมาเป็นค่าๆหนึ่งเสมอ
/*
? Destructuring(แปลว่าการแยก) คือ การแยก value ออกจาก array และ object
? เช่น 
*/
// const arr4=Array.of(10) //create array with item 10
// console.log(arr4)
