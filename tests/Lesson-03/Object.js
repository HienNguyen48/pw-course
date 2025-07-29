
const student = {
    name: "Hien",
    address:{
        stress: "Luong Son",
        city: "HB"
    },
    phoneNumber: 972139939
}
// console.log(student.address.city); //truy xuất dữ liệu
// console.log(student["phoneNumber"]);
//gán lại dữ liệu 
// student.name = "Hien";
// console.log(student.name);

//Trong javascript khai báo 1 cái biến bằng từ khóa const thì có nghĩa là bản thân cái biến đó không thể gán lại được => nhưng nội dung bên trong là các thuộc tính của đối tượng nó tham chiếu đến => thì nó có thể thay đổi được
//Ví dụ: gán lại "name"  = "Duong" => thì k thể gán lại được => vì mình k thể khai báo những cái thuộc tính này bên trong của nó thành cái khác được 
student = {
    name: "Duong",
    address:{
        stress: "Luong Son",
        city: "HB"
    },
    phoneNumber: 972139939
}
//Nhưng những giá trị bên trong của thuộc tính (Duong) mình có thể thay đổi được
 