//1.continue
for(let i = 0; i<=5; i++){
    //if(i % 2 === 0){
    if(i === 2){
        continue;
    }
    console.log(i);
}

// //2. Break
// const arr = [11, 23, 44, 55];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){// arr[i] truy xuất 1 phần tử trong mảng 
//         break;//khi gặp tới 1 phần tử chia hết cho 2 thì sẽ break ra khỏi vòng lặp luôn & k quan tâm tới các phần tử tiếp theo trong mảng
//     }
//     console.log(arr[i]);//in ra những giá trị không chia hết cho 2, còn gặp giá trị chia hết cho 2 thì sẽ dùng vòng lặp
// }