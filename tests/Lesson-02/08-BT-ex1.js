//Khai báo một hằng số number với giá trị là 12.
const number = 12;

//Khai báo một biến name với giá trị là ”my number”
let name = "my number";

//Khai báo một biến isEven với giá trị là sai.
var isEven = "sai";

//Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng.
if(number % 2 === 0){
    isEven = "true";
}
console.log("isEven: " + isEven);