/*For...of
for (const value of arr){
//code here
}*/
// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
// let arr = [1, 2, 3, 4, 3, 55, 23];
// let PTDT = arr.indexOf(3);




/*2. Tạo mảng chứa các kí tự nghịch đảo(Dùng split() + reverse()) từ một chuỗi đã cho. Ví dụ với chuỗi”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,“y”, “a”, “l”, “P”] => dua vao bai tap for
Cách 1:
let arr = "Playwright";
let newArr = arr.split("").reverse().join("");
console.log(newArr);

Cách 2: 
let arr = "Playwright";
let newArr = [];
for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
}
console.log(newArr);
*/

// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3, 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
// const a = "10";
// const b = 20;
// console.log (a + b);