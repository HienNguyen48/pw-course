const a = 10;
const b = 11;
const c = "10";
//const result = a > b; //=> false 
//console.log(result);
//const result2 = a === 11; //false
//const result3 = a !== 15; //true
//console.log(result2);
//console.log(result3);
//===: value + kiểu dữ liệu(string, number, boolean)
//==: value
//Sự khác biệt giữa 3 dấu = và 2 dấu = là: 3 dấu === thì sẽ kiểm tra value & kiểu dữ liệu, còn 2 dấu == chỉ kiểm tra value của mình thôi => tự động chuyển cái string thành kiểu number 
const result = a == c;//true
const result2 = a === c; //false
const result3 = a == b; //true
console.log(result);
console.log(result2);
console.log(result3);

