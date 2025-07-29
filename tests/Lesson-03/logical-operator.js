let a = true;
let b = false;
if (a || b){//true && false
    console.log("run code");
}

const newA = !a; //false
const newB = !!b; //false
console.log(newA);
console.log(newB);
//Đảo ngược lại giá trị boolean (true hoặc false)
//Sử dụng trong các câu điều kiện 