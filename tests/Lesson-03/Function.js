
// function sayHello(){
//     console.log("Hello");
// }

// sayHello();
// sayHello();

// function printNumber(){
// for(let  i = 1; i<=10 ; i++){
//     console.log(i);
// }
// }
// printNumber();
// console.log("Hello");

//Chỉ muốn in ra 5 lần
//dùng n để làm điều kiện dừng  => tham số hóa cái hàm của mình 

// function printNumber(n){
// for(let  i = 1; i<=n ; i++){
//     console.log(i);
// }
// }
// printNumber(15);
// console.log("Hello");

//function có return value => nghĩa là hàm trả về giá trị 
function getMax (a, b){
    if (a > b){
        return a;
    }
    return b;
}

const max = getMax(10, 15);
console.log(max);

//Khi return xong nó sẽ out ra khỏi hàm function, nếu cho console.log ở bên dưới return b => thì nó sẽ k chạy được câu lệnh cosole.log đó vì đã return rồi
//hàm có biến => trả ra 1 giá trị nên cần có 1 cái biến để hứng nó => vì vậy cần khai báo biến ngay bên dưới hàm 