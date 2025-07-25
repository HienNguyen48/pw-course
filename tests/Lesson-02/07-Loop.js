// // //Vòng lặp
// // //Dùng để thực hiện 1 đoạn logic một số lần nhất định
// // //Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>){//code}


// // // lấy ra 1 danh sách tăng dần
// // // var danhSach = [1,2,3,4,5,6,7]
// // // for (let i = 1; i <= danhSach.Count; i++) {
// // //     console.log(i);
// // // }

// // // lấy ra ds rỗng
// // // var danhSach = []
// // // for (let i = 1; i <= danhSach.Count; i++) {
// // //     console.log(i);
// // // }

// // // lấy ra 1 danh sách giảm dần từ  mới nhất => cũ nhất 
// // var danhSach = [5, 4, 3, 3, 9, 6, 7];
// //       //index  [0, 1, 2, 3, 4, 5, 6]
// // console.log("SL: ", danhSach.length);
// // for (let i = danhSach.length; i >= 1; i--) {
// //     console.log('Giá trị:',danhSach[i-1]);
// //     console.log('Chỉ số:' , i-1)
// // }
// // console.log(1111)
// // //khởi tạo i = 1 thì sẽ kiểm tra xem i có <5 không. Nếu <5 thì sẽ kiểm tra => i = 2
// // // i = 2, kiểm tra i < 5, i = 3;
// // // i = 3,...
// // // khởi tạo => kiểm tra
// // // //var a = 'a'; // Khai báo
// // // var a = 'b'; // Khai báo


// // //  let a = 'a'; // Khai báo
// // //      a = 'b'; // Gán

// // var danhSach = [5, 4, 3, 3, 9, 6, 7];
// //       //index  [0, 1, 2, 3, 4, 5, 6]
// // // Lấy giá trị cụ thể (thông qua index) trong  mảng mà không cần lặp từ đầu đến cuối
// //       danhSach[3]
// //       danhSach[6]
// // // console.log("DS index 3,6: ", danhSach[3],danhSach[6]);