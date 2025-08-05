// 3.Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let tong = 0;
for(let i = 0; i<= arr.length -1; i ++){
    tong += arr[i];
}
console.log(tong);

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽnhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đãchuyển đổi. Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;

// function CToF(C)
// {
//     F = (C) * 9/5 + 32;
//     console.log("F=" + F);
// }
// CToF(20);

// function FToC(F)
// {
//     C = (F - 32) * 5 / 9;
//     console.log("C=" + C);
// }
// FToC(20);


// Bài 1: Trả về là phải dùng return 
// function BMI(chieuCao, canNang){
//  chieuCao = parseFloat(chieuCao);
//  canNang = parseFloat(canNang);
// let CT = canNang/ (chieuCao * chieuCao);

//     if(CT < 18.5){
//         console.log("Thiếu cân");
//     }else if(CT <25){
//         console.log("Bình thường");
//     }else if(CT <30){
//         console.log("Thừa cân");
//     }else{
//         console.log("Béo phì");
//     }
//     console.log(chieuCao);
//     console.log(canNang);
//     console.log(CT.toFixed(2));
// }

// //Cách 2:
//     if(CT < 18.5){
//         return 'Thiếu cân';
//     }else if(CT <25){
//         return 'Bình thường';
//     }else if(CT <30){
//         return 'Thừa cân';
//     }else{
//         return 'Béo phì';;
//     }
//     console.log(chieuCao);
//     console.log(canNang);
//     console.log(CT.toFixed(2));
// }

// BMI(1.50,70);

// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)

// function thoiTiet(nhietDo){
//     if(nhietDo >= 30){
//         console.log("Nhiệt độ nóng");
//     }else if(nhietDo < 30 && nhietDo >= 20){
//         console.log("Nhiệt độ mát");
//     } else{
//         console.log("Nhiệt độ là lạnh");
//     }
//     console.log(nhietDo);
// }
// thoiTiet(19);

// => Cách 2: có thể dùng return if...else

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
// function hocTap(diemSo){
//      if(diemSo >= 8){
//          console.log("Học sinh giỏi");
//      }else if(diemSo >= 6.5 && diemSo < 8){
//          console.log("Học sinh khá");
//      } else{
//          console.log("Học sinh trung bình");
//      }
//      console.log(diemSo);
//  }
//  hocTap(4);

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.

// function thoiGian(gio){
//      if(gio >= 9 && gio < 21){
//          console.log(`${gio}h: Cửa hàng mở cửa`);
//      }else {
//          console.log(`${gio}h: Cửa hàng đóng cửa`);
//      } 
//  }
// thoiGian(8);
// thoiGian(9);
// thoiGian(10);
// thoiGian(15);
// thoiGian(20);
// thoiGian(22);

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
// function thoiGian(thang){
//     switch(thang){
//         case 1:
//             console.log("Tháng 1");
//             break;

//         case 2:
//             console.log("Tháng 2");
//             break;
//         case 3:
//             console.log("Tháng 3");
//             break;
//         case 4:
//             console.log("Tháng 4");
//             break;
//         case 5:
//             console.log("Tháng 5");
//             break;
//         case 6:
//             console.log("Tháng 6");
//             break;

//          case 7:
//             console.log("Tháng 7");
//             break;

//          case 8:
//             console.log("Tháng 8");
//             break;

//          case 9:
//             console.log("Tháng 9");
//             break;

//          case 10:
//             console.log("Tháng 10");
//             break;

//          case 11:
//             console.log("Tháng 11");
//             break;

//         case 12:
//             console.log("Tháng 12");
//             break;
        
//         default:
//              console.log("Không xác định");
//     }
//     console.log(`${thang}`);
// }

// thoiGian(0);
// thoiGian(3);
// thoiGian(5);
// thoiGian(7);
// thoiGian(8);
// thoiGian(11);
// thoiGian(2);

// // 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
// function mucvevaocong(tuoi){
//     if( tuoi <= 5){
//         console.log("Trẻ em dưới 5 tuổi được miễn phí");
//     }else if(tuoi >= 18){
//         console.log("Người lớn từ 18 tuổi trở lên là 100k");
//     }else{
//          console.log("trẻ em từ 6 đến 17 tuổi là 50k");
//     }
//     console.log(tuoi);
// }
// mucvevaocong(4);
// mucvevaocong(5);
// mucvevaocong(6);
// mucvevaocong(17);
// mucvevaocong(18);
// mucvevaocong(24);

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.Biết giỏ hàng là một mảng chứa các object sản phẩm. 
// Sản phẩm có cấu trúc: {“name”:“product 1”, price: 100 }

// function kiemtra(){

// let SP = [
//     {name:"product 1", price: 100 },
//     {name:"product 2", price: -2 },
//     {name:"product 3", price: -300 },
// ]
// for(let i = 0; i < SP.length -1; i++){
//     if (SP[i].price > 0) 
//         {
//         console.log("giá trị > 0");
//     }
//     else {
//          console.log("giá trị < 0");
//     }
// }
// }
// kiemtra();

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho. Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó




// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
//  Khai báo mảng global các object có 2 thuộc tính: name, email
//  Khai báo hàm có 2 tham số: name, newEmail
//  Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
// function capNhat(name, newEmail){

//     let global = [
//         {name: "Hiền", email: "hien@example.com"},// 0
//         {name: "Hiền1", email: "hien@example.com"},//1
//         {name: "Hiền2", email: "hien1@example.com"}//2
//     ];
//     for(let i = 0; i <= global.length -1 ; i++){//Cứ là mảng .length(lấy ra tất cả các giá trị trong mảng) thì sẽ mặc định trừ đi 1
//         if(global[i].name === name){
//             global.email === newEmail
//     console.log("Ten:", name);
//     console.log("Email:",newEmail); //if ở đâu thì console.log sẽ ở đó 
//         }
//     }
// }
// capNhat('Hiền',"");
// capNhat('Hiền1',"thaihoa@gmail.com");


// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}




    // let tong = 0;
    // let SL =[10,23,44,66,77,88,99,10];
    // for(var i = 0; i<=SL.length -1 ; i++){        
    //     tong = tong + SL[i];
    // }
    // let TBC = tong/SL.length
    // console.log(TBC);


// function TBCV1(SL){
//     let tong = 0;    
//     for(var i = 0; i<=SL.length -1 ; i++){        
//         tong = tong + SL[i]; // gán lại bằng chính nó cộng với SL vòng lặp 
//     }
//     let TBC = tong/SL.length
//     console.log(TBC);
// }

// let SL1 = [8,77,90,1,2,34]
// TBCV1(SL1)
// let SL2 = [8,9,10]
// TBCV1(SL2)

// TBCV1([9,11,10])


// // 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// // mảng các object.
// // Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
// function tinhDiemSV(){
//     let SV = [
//         {names: "Hien1", score: 22},
//         {names: "Hien2", score: 32},
//         {names: "Hien3", score: 42},
//         {names: "Hien4", score: 52},
//         {names: "Hien5", score: 62},
//         {names: "Hien6", score: 72},
//         {names: "Hien6", score: 19256}
//     ]

//     let tong = 0;
//     for(let i = 0; i <= SV.length - 1; i++){
//         tong = tong + SV[i].score;
//     }
//     let TBC = tong/SV.length
//     console.log(TBC);
// }
// tinhDiemSV();

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

//LOOP
//  1. Tính tổng từ 1 đến 100.
//     let tong = 0; // Tạo ra 1 cái hứng kết quả khi cộng tổng các giá trị với nhau 
//     for( let i = 0; i <= 100 ; i++){
//         tong = tong + i;
//     }
//     console.log(tong);
// // 2. In bảng cửu chương từ 2 đến 9.
      
//       for(let i = 2; i <= 9 ; i++){
//         console.log(i);
//         for(let j = 1; j <= 10; j++){
//             let tich = i * j;
//             console.log(`${i} x ${j} = ${tich}`);
//       }
//       }
      
// // 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
//        for(let i = 1; i <= 99; i++){
//         if(i % 2 === 1){
//             console.log(`${i} Là số lẻ`);
//         }else{
//             console.log(`${i} Là số chẵn`);
//         }
//        }
// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user-1@example.com, user2@example.com, ..., user10@example.com).

        //    for(let i = 0;  i <= 10; i++){
        //     console.log(`user-${i}@example.com`);
        //    }
           


// // 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}
// function DT(){
//     let object = [
//         {month: 1, total: 100},
//         {month: 2, total: 100},
//         {month: 3, total: 100},
//         {month: 4, total: 100},
//         {month: 5, total: 100},
//         {month: 6, total: 100},
//         {month: 7, total: 100},
//         {month: 8, total: 100},
//         {month: 9, total: 100},
//         {month: 10, total: 100},
//         {month: 11, total: 100},
//         {month: 12, total: 100}
//     ]
//     let tong = 0;
//     for(let i = 0; i < object.length; i++){
//         tong =  tong + object[i].total;
//     }
//     console.log(`In ra tổng của từng tháng 1 đến tháng 12 ${tong}`);
// }

// DT();




