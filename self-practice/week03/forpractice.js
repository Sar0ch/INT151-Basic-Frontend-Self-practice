// getFreqTrim (ง่าย)
// โจทย์: นับความถี่คำ รองรับช่องว่างหลายอัน/แท็บ
// อินพุต: "a a\tb" → เอาต์พุต: { a:2, b:1 }
function getFreqTrim(sentence) {
  if (sentence == null) return undefined;
  if (sentence.trim() === "") return {};

  const words = sentence.trim().split(/\s+/);
  const freq = {};
  for (let w of words) {
    w = w.toLowerCase();
    freq[w] = (freq[w] || 0) + 1;
  }
  return freq;
}
console.log(getFreqTrim("a   a\tb")); 

// safePlus (กลาง)
// โจทย์: safePlus(a,b) แปลงเป็น Number ก่อนบวก ถ้าแปลงไม่ได้ให้โยน TypeError
// ตัวอย่าง: safePlus("5","7") → 12, safePlus("x",3) → throw
function safePlus(a, b) {
  const n1 = Number(a);
  const n2 = Number(b);
  if (isNaN(n1) || isNaN(n2)) {
    throw new TypeError("Inputs must be numbers or numeric strings");
  }
  return n1 + n2;
}

console.log(safePlus("5","7")); 

// pipe (กลาง)
// โจทย์: pipe(...fns) คืนฟังก์ชันที่ส่งค่าผ่านฟังก์ชันทีละตัว
// ตัวอย่าง: pipe(x=>x+1, x=>x*2)(3) → 8
function pipe(...fns) {
  return (x) => fns.reduce((v, fn) => fn(v), x);
}

const result = pipe(x=>x+1, x=>x*2)(3);
console.log(result); 


// bigramFreq (กลางค่อนยาก)
// โจทย์: นับความถี่ “คู่คำติดกัน”
// อินพุต: "to be or not to be"
// เอาต์พุต: { "to be":2, "be or":1, "or not":1, "not to":1 }
function bigramFreq(sentence) {
  if (!sentence) return {};
  const words = sentence.trim().split(/\s+/);
  const freq = {};
  for (let i = 0; i < words.length-1; i++) {
    const bigram = words[i] + " " + words[i+1];
    freq[bigram] = (freq[bigram] || 0) + 1;
  }
  return freq;
}

console.log(bigramFreq("to be or not to be"));

// บั๊กฮันต์ sum2/sum3 (สั้นๆแต่แสบ)
// โจทย์: โค้ดนี้พังเพราะ a,b อยู่นอกสโคป

// const sum2 = () => a + b
// const sum3 = function(){ return a + b }

// แก้ให้รับพารามิเตอร์ในสโคปตัวเอง
const sum2 = (a,b) => a + b;

const sum3 = function(a,b) {
  return a + b;
}

console.log(sum2(1,2)); 
console.log(sum3(4,5)); 

// เขียนฟังก์ชัน reverseWords(sentence) ที่สลับลำดับคำในประโยค แต่ไม่สลับตัวอักษรในคำ
// อินพุต: "I love JavaScript"
// เอาต์พุต: "JavaScript love I"
function reverseWords(sentence) {
  if (!sentence) return "";
  return sentence.trim().split(/\s+/).reverse().join(" ");
}
console.log(reverseWords("I love JavaScript")); 


// เขียนฟังก์ชัน countChars(str) คืน object ที่เก็บจำนวนครั้งที่ตัวอักษรแต่ละตัว (ไม่แยกพิมพ์เล็ก/ใหญ่) ปรากฏในสตริง
// อินพุต: "Hello"
// เอาต์พุต: { h:1, e:1, l:2, o:1 }
function countChars(str) {
  if (!str) return {};
  const freq = {};
  for (let ch of str.toLowerCase()) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(countChars("Hello")); 


// เขียนฟังก์ชัน filterEven(arr) ที่รับอาร์เรย์ของตัวเลขแล้วคืนอาร์เรย์ใหม่ที่มีเฉพาะเลขคู่ โดยใช้ arrow function + filter
// อินพุต: [1,2,3,4,5,6]
// เอาต์พุต: [2,4,6]
const filterEven = arr => arr.filter(x => x % 2 === 0);

console.log(filterEven([1,2,3,4,5,6])); 


// เขียนฟังก์ชัน uniqueArray(arr) คืนอาร์เรย์ที่ตัดค่าซ้ำออก โดยเรียงตามการเจอครั้งแรก
// อินพุต: [1,2,2,3,1,4]
// เอาต์พุต: [1,2,3,4]
function uniqueArray(arr) {
  const seen = new Set();
  const result = [];
  for (let val of arr) {
    if (!seen.has(val)) {
      seen.add(val);
      result.push(val);
    }
  }
  return result;
}
console.log(uniqueArray([1,2,2,3,1,4])); 
