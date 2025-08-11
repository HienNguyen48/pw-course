// 1. forEach
// array.forEach => ((value, index){
// //code hare
// }
// )
/*
1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
1
2
3
const arr = [2,9,30,8,7,77,44,239]
arr.forEach((value, index) => {
    console.log(`In ra tất cả các ${index} trong có giá trị là ${value}`);
})
*/

/* 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
let tinhTong = [2, 5, 80, 81];//168
let sum = 0;
let max = tinhTong[0];
let min = tinhTong[0];

  
for(let i = 0; i <= tinhTong.length - 1; i ++){
    sum += tinhTong[i];
}
console.log(`Giá trị tổng bằng: ${sum}`);

tinhTong.forEach((value) => {
    if(value > max){
        max = value;
    }
    
    if(value < min){
        min = value;
    }

})
console.log(`Gia tri lớn nhất: ${max}`);
console.log(`Gia tri nhỏ nhất: ${min}`);

let TB = sum/tinhTong.length;
console.log(`Gias trị trung bình là: ${TB}`);
*/

/*3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]
const arrOld = [10, 40, 12, 22, 44];
const arrNew = [];
arrOld.forEach((value) => {
    arrNew.push(value * 2);//Nhân đôi rồi thêm vào mảng 
})
console.log(`Gia trị mảng mới là: ${arrNew}`);
*/