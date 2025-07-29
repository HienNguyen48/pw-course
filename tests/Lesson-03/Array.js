const arr = [1, 2, 3, 4, 5];
const str = ["Dung", "Khoa", "Thu", "Thao", "Hien"];

//Mảng mix các kiểu dữ liệu khác vào được không 
const mix = [1, "K17", {},  true];
//Khi nào sử dụng mảng để lưu các giá trị lại
let className = "K17";
let className1 = "K18";
let className2 = "K19";

console.log(mix);

// //Truy xuất mảng => xem độ dài của mảng
// console.log(str.length)

//truy xuất từng phần tử trong mảng => vị trí của nó bắt đầu từ số 0
//VD mảng: const str = ["Dung", "Khoa", "Thu", "Thao", "Hien"];
// index tương ứng [0,1,2,3,4]
// console.log(str[4]);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
//dùng vòng lặp for để lấy ra mảng đó
for (let i = 0; i< str.length; i++){
    console.log(str[i]);
}
