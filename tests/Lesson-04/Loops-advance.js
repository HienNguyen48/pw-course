//for ...in: Lặp các thuộc tính trong Object & cho phép truy cập đến các index trong array (độ dài của mảng)
let product = {
    Banana: 20, // banana thuộc tính, 20 là giá trị của thuộc tính
    Appple: 30,
    Orage: 15
}
// //khai báo 1 biến: property trong vòng lặp for để chứa các thuộc tính này 
// // in: trong object 
// for (let property in product){
//      console.log(property);
// }
// console.log(product.Banana);
// console.log(product["Banana"]);

for (let property in product){
     console.log(product[property]); //in ra được các giá trị của thuộc tính trong Object 
}
