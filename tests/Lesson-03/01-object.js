// //1. Tạo 1 object car
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: "2021",
// }
// console.log(car.year);

const { getDefaultAutoSelectFamilyAttemptTimeout } = require("node:net")

// //2.Tạo 1 object person
// const person = {
//     name:"Hien",
//     address:{
//         strest:"Số 367 Bình Đà - Bình Minh - Thanh Oai",
//         city:"Hà Nội",
//         country:"VietNam"
//     }
// }
// console.log(person.address.strest);

// //3. Tạo 1 object student
// const student = {
//     name:"HienBeu",
//     grades:{
//         math: 7,
//         english: 10,
//     }
// }

// console.log("Truy cập điểm mô toán: ", student.grades["math"]);

// //4. Tạo 1 object Production
// const Product = {
//     TenSP:"SP product",
//     MaSP: "1000620350",
//     GT:"1000000"
// };

// for (let key in Product){
//     console.log("In ra tên & giá trị của SP: ", Product[key]);
// }

// //5.Tạo một object settings để quản lý cài đặt của ứng dụng 
// const settings = {
//     volume: "25HZ",
//     brightness: "test"
// }
// console.log(settings);
// settings.volume = "155Hz";
// console.log(settings);

// //6. Tạo 1 object bike
// const bike = {

// }
// bike.color = "Blue";
// bike["name"] = "hien";

// console.log(bike);

// //7. Tao 1 object employee => xóa tuổi
// const employee = {
//     name:"cau 5",
//     age:"36"
// }
// console.log(employee);
// delete employee.age;
// console.log(employee);


// 8. Một trường học có các lớp học và học sinh như sau:
// classA: An, Bình, Châu
//  classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh
// Vd: const school = { classA: ["Giang"]...}

const school = {
    classA: ["An","Bình","Châu"],
    classB: ["Đào","Hương","Giang"]
}

console.log(school);