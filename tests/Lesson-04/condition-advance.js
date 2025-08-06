/*comment được nhiều dòng
1. If_else

if (condition){
//run code when condition = true
} else{
    // run code khi condition = false 
}

2. If...else...if

if (condition1){
//run code when condition1 = true
} else if (condition1){
//run code when condition2 = true
}else if(condition3){
//run code when condition1 = true
}else{
// run code when all conditions = false
}

2. swich...case: cho phép  verify giá trị của 1 biểu thức hoặc run đoạn code tương ứng với giá trị đó 
Khi cần kiểm tra nhiều giá trị của 1 biến hoặc của 1 biểu thức nào đó => giúp cho code sáng hơn, dễ  đọc hơn đối với case mà mình phải check  nhiều điều kiện 
Cú pháp :
switch(bieu_thuc){
case gia_tri_1:
    //run code
    break;//thoát ra khỏi switch case của mình khi đã tìm được giá trị mong muốn 
case gia_tri_2:
    //run code
    break;
case gia_tri_3:
    //run code
    break;
case gia_tri_4:
    //run code
    break;
Default:
//run code khi các case trên là false
}


*/
//Đề bài kiểm tra các ngày trong tuần & in ra tên thu của ngay 
let ngay = 10;
switch(ngay){
    case 1:
        console.log("Thứ 2 đầu tuần");
        break;
    case 2:
        console.log("Thứ 3");
        break;
    case 3:
        console.log("Thứ 4");
        break;
    case 4:
        console.log("Thứ 5");
        break;
    case 5:
        console.log("Thứ 6");
        break;
    default:
        console.log("Không thuộc các thứ trên");
}

