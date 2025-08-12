//ใช้ ai ในการ gen โจทย์จากเนื้อหาที่เรียนเพื่อมาใช้ในการฝึกทำ

// 1. สร้างอาร์เรย์ scores เก็บคะแนนนักเรียน 6 คน แล้วหาคะแนนสูงสุดในอาร์เรย์ หาคะแนนสูงสุด (Max Score)

const scores = [45, 78, 88, 32, 95, 60];
const maxScore = Math.max(...scores);       // ใช้ spread เพื่อแปลงอาร์เรย์เป็น list ของตัวเลข
console.log("คะแนนสูงสุด:", maxScore);        



// 2. ใช้ .map() กับอาร์เรย์ scores เพื่อเปลี่ยนเป็นข้อความ "ผ่าน" ถ้าคะแนน >= 50 และ "ไม่ผ่าน" ถ้าต่ำกว่า 50 ตรวจสอบผ่าน-ไม่ผ่าน (Pass or Fail)


const passOrFail = scores.map(score => score >= 50 ? "ผ่าน" : "ไม่ผ่าน"); // .map() เพื่อแปลงแต่ละค่าของอาร์เรย์ scores เป็นข้อความใหม่ 
// จำไม่ได้ว่า .map ใช้ยังไง จึงไปถาม chatgpt แล้วกลับมาฝึกทำต่อ
console.log("ผ่าน/ไม่ผ่าน:", passOrFail);

// 3. Aให้มีอาร์เรย์ของนักเรียนที่เป็น object { name, score } แล้วใช้ .reduce() เพื่อหาค่าเฉลี่ยคะแนนของทุกคน หาค่าเฉลี่ยคะแนนนักเรียน (Average Score)

const students = [
  { name: "ไก่", score: 78 },
  { name: "เป็ด", score: 88 },
  { name: "สมชาย", score: 95 },
  { name: "สมหญิง", score: 60 }
];

const averageScore = students.reduce((sum, student) => sum + student.score, 0) / students.length; // ใช้ .reduce() เพื่อรวมคะแนนของนักเรียนทุกคน
console.log("ค่าเฉลี่ย:", averageScore);

//4 ใช้ splice
let arr = [1, 2, 3, 4, 5];

// ลบ 2 ตัวเริ่มจาก index 1 (คือเลข 2 กับ 3)
arr.splice(1, 2); // arr เป็น [1, 4, 5]

// แทรก 99 ที่ index 2 โดยไม่ลบตัวไหน
arr.splice(2, 0, 99); // arr เป็น [1, 4, 99, 5]

// ลบ 1 ตัวที่ index 0 แล้วแทรก 100 กับ 101 แทน
arr.splice(0, 1, 100, 101); // arr เป็น [100, 101, 4, 99, 5]

// 5. สร้าง array ด้วย constructor ขนาด 3 แล้วเติมค่าลงไป
const arrConstructed = new Array(3);    //ใช้ new Array(3) สร้างอาร์เรย์ว่างความยาว 3 แล้วใส่ค่าทีละตำแหน่ง
arrConstructed[0] = 100;
arrConstructed[1] = 200;
arrConstructed[2] = 300;
console.log(arrConstructed);
// ข้อดี: กำหนดขนาดเริ่มต้นของอาร์เรย์ได้ชัดเจน
// ข้อเสีย: ต้องเติมค่าทีละช่อง ไม่ได้ใส่ค่าตั้งแต่ตอนสร้าง