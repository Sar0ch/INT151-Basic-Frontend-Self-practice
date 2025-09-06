"use strict";

/* 01) addProperty
   เขียนฟังก์ชัน addProperty(obj, key, value) 
   ที่เพิ่ม property ใหม่เข้าไปใน object แล้ว return object */
function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addProperty({ name: "John" }, "age", 25)); 
console.log(addProperty({}, "city", "New York"));

/* 02) mergeObject
   เขียนฟังก์ชัน mergeObject(obj1, obj2) 
   ที่รวม object สองตัวแล้ว return */
function mergeObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObject({ name: "John", age: 25 }, { city: "New York" }));
console.log(mergeObject({ name: "Jane" }, { age: 30, country: "USA" }));

/* 03) getFreqOfWords
   เขียนฟังก์ชัน getFreqOfWords(sentence) 
   คืน object { word: frequency } แบบไม่สนตัวเล็กใหญ่ 
   ถ้า input เป็น null/undefined → return undefined */
function getFreqOfWords(sentence) {
  if (!sentence) return undefined;
  const words = sentence.toLowerCase().split(/\s+/);
  return words.reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});
}
console.log(getFreqOfWords("Today is present and present is your gift"));
console.log(getFreqOfWords("Do you best just do it"));
console.log(getFreqOfWords(null));

/* 04) extractAndRename
   เขียนฟังก์ชัน extractAndRename(obj) 
   ที่ดึง name, age → เปลี่ยนชื่อเป็น { fullName, yearsOld } */
function extractAndRename(obj) {
  const { name: fullName, age: yearsOld } = obj;
  return { fullName, yearsOld };
}
console.log(extractAndRename({ name: "John", age: 25, city: "New York" }));
console.log(extractAndRename({ name: "Jane", age: 30 }));

/* 05) mergeAndDestructure
   เขียนฟังก์ชัน mergeAndDestructure(obj1, obj2) 
   รวม object แล้ว return object ที่มี { name, age } */
function mergeAndDestructure(obj1, obj2) {
  const merged = { ...obj1, ...obj2 };
  const { name, age } = merged;
  return { name, age };
}
console.log(mergeAndDestructure({ name: "John", age: 25 }, { city: "New York" }));
console.log(mergeAndDestructure({ name: "Jane" }, { age: 30, country: "USA" }));

/* 06) removeDuplicateWords
   เขียนฟังก์ชัน removeDuplicateWords(sentence) 
   ลบคำซ้ำออก (ไม่สนตัวเล็กใหญ่) แต่คงคำแรกที่เจอ
   ถ้า input ว่าง/null/undefined → return "" */
function removeDuplicateWords(sentence) {
  if (!sentence) return "";
  const seen = new Set();
  return sentence
    .split(/\s+/)
    .filter(word => {
      const lower = word.toLowerCase();
      if (seen.has(lower)) return false;
      seen.add(lower);
      return true;
    })
    .join(" ");
}
console.log(removeDuplicateWords("This is a test This test is easy."));
console.log(removeDuplicateWords("Hello hello HELLO world!"));
console.log(removeDuplicateWords("One two two three three three"));
console.log(removeDuplicateWords(""));
console.log(removeDuplicateWords(null));

/* 07) findValue
   เขียนฟังก์ชัน findValue(arr) 
   คืน { min, max, sum, avg } จาก array ของตัวเลข */
function findValue(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length;
  return { min, max, sum, avg };
}
console.log(findValue([1, 2, 3, 4, 5]));

/* 08) convertToUppercase
   เขียนฟังก์ชัน convertToUppercase(arr) 
   แปลงทุก string ใน array เป็นตัวพิมพ์ใหญ่ */
function convertToUppercase(arr) {
  return arr.map(s => s.toUpperCase());
}
console.log(convertToUppercase(["hello", "world"]));
console.log(convertToUppercase(["javascript", "is", "fun"]));

/* 09) findMax (reduce)
   เขียนฟังก์ชัน findMax(arr) 
   ที่หาเลขมากสุดโดยใช้ reduce */
function findMax(arr) {
  return arr.reduce((max, val) => (val > max ? val : max));
}
console.log(findMax([1, 2, 3, 4]));
console.log(findMax([10, 5, 8, 7]));

/* 10) removeFalsyValues
   เขียนฟังก์ชัน removeFalsyValues(arr) 
   คืน array ใหม่ที่ตัดค่า falsy (0, "", false, null, undefined) ออก */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, "", 3]));
console.log(removeFalsyValues(["a", "", "b", null, "c"]));
console.log(removeFalsyValues([null, undefined, "A"]));

/* 11) doubleAndFilterEvenNumbers
   เขียนฟังก์ชัน doubleAndFilterEvenNumbers(arr) 
   กรองเฉพาะเลขคู่แล้วคูณสอง */
function doubleAndFilterEvenNumbers(arr) {
  return arr.filter(n => n % 2 === 0).map(n => n * 2);
}
console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4]));
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]));

/* 12) filterEvenNumbers
   เขียนฟังก์ชัน filterEvenNumbers(arr) 
   คืน array ที่มีเฉพาะเลขคู่ */
function filterEvenNumbers(arr) {
  return arr.filter(n => n % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4]));
console.log(filterEvenNumbers([5, 6, 7, 8]));

/* 13) populateArray
   เขียนฟังก์ชัน populateArray(length, value) 
   สร้าง array ความยาว length ที่เต็มไปด้วย value */
function populateArray(length, value) {
  return Array(length).fill(value);
}
console.log(populateArray(3, "a"));
console.log(populateArray(5, 0));

/* 14) squareNumbers
   เขียนฟังก์ชัน squareNumbers(arr) 
   ยกกำลังสองทุกตัวใน array */
function squareNumbers(arr) {
  return arr.map(n => n * n);
}
console.log(squareNumbers([1, 2, 3, 4]));
console.log(squareNumbers([5, 6]));

/* 15) processNumbers
   เขียนฟังก์ชัน processNumbers(arr) 
   ยกกำลังสอง → กรองเลขคี่ → รวมผลรวม */
function processNumbers(arr) {
  return arr
    .map(n => n * n)
    .filter(n => n % 2 !== 0)
    .reduce((a, b) => a + b, 0);
}
console.log(processNumbers([1, 2, 3, 4]));
console.log(processNumbers([5, 6, 7, 8]));

/* 16) processNumbersFull (ข้อเต็มตาม PDF)
   เขียนฟังก์ชัน processNumbersFull(arr) 
   ยกกำลังสอง → กรองเลขคี่ → รวมผลรวม */
function processNumbersFull(arr) {
  return arr
    .map(n => n * n)
    .filter(n => n % 2 !== 0)
    .reduce((a, b) => a + b, 0);
}
console.log(processNumbersFull([1, 2, 3, 4]));
console.log(processNumbersFull([5, 6, 7, 8]));
