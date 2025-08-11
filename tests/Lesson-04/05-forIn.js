//For...in
// for (let property in product){
// }

/* 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra name=Alex age=10
let student = {
    name: "Alex",
    age: 10
}
for (let HS in student){
    console.log(student[HS]);
    console.log(student);
}
*/


/* 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng30 (=10+20).
let student = {
    name: "Alex",
    age: 10,
    salary: 20
}

let sum = 0;
for(let tong in student){
    if(typeof student[tong] === "number"){// So sánh xem giá trị đó có phải là kiểu số không
    sum += student[tong];
    }
}
 console.log(`Tính tổng các giá trị số là: ${sum}`);

 //Typeof dùng để kiểm tra 1 biến nào đó => kiểm tra giá trị của thuộc tính trong object có phải kiểu number hay không 
 //Typeof giúp mình check được cái biến của mình thuộc những kiểu dữ liệu nào (phải có trong dấu nháy mí đúng)
 */

/* 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]
let student = {
    name: "Alex",
    age: 10,
    salary: 20
} 
let values = Object.values(student); // Lấy tất cả các giá trị (value) trong object student và gán vào biến values dưới dạng một mảng.
console.log(values); 
*/