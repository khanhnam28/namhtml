'use strict'


// học javascript buổi 1
/*
1: khai báo biến --> in ra biến, in ra type of variable
2: gán giá trị
 ** hosting
 ** stric mode
3: kiểu dữ liệu* // sting, number, boolean, object, null, underfined
4: làm quen với các phép toán: +, - , *(x), / (:), ....
4.1: các phép toán với số
4.2: các phép toán với string: concat(),..... 
5: làm quen với array: 
7: làm quen với object: 
9: function (hàm) / class 
10: Ngày tháng - thời gian Date-Time
11: if-else  / if- else if - else
12: switch - case
11: làm quen với các vòng lặp for, while, do-while
8: các phép toán với object
6: các phép toán với array
12: xử lý lỗi
13: es6
15: DOM 

*/



// các cách comment code 
// 1
// 5 comment nhiều dòng: ctrl + /
/*
    cấu trúc file: tên file . js
    comment 1 dòng: //
    comment nhiều dòng: /*
*/

// các cách khai báo biến
// var từ đời tống
// let
// const
// k dùng j hết ==> không nên dùng
let x; // khai báo biến
console.log(x);
const y = 12;
console.log(y);
x = 2; // gán giá trị
console.log(x);
// y = 5;
console.log(y);
 // luôn2 khai báo trước khi sử dụng
let z = null;
let number = 12;
let yourName = 'nguyen van doan'

let isSuccess = true;
let s = 1 + '1';
let t = 1 - '1';
console.log(s);
console.log(typeof s);
console.log(t);

// hạn chế sử dụng tối đa các 
// phép toán giữa các kiểu dữ liệu khác nhau
// if (3 > 5) {
//     console.log(3);
// } else {
//     console.log(5);
// }

// if (3 > 5) {
//     console.log('3> 5');
    
// } else if (3 > 2) {
//     console.log('3>2');
    
// } else {
//     console.log(3);
// }

// khai báo 2 biến a, b, name
// a, b là số
// name : là string -- tên các  bạn

// khai báo các biết tong, hieu, tic, thuong
// gán giá trị của các biến trên lần lượt cho tổng hiểu tích thương của a và b
// sử dụng if else/ if else if ... else
// để so sánh a với 100, 200, 300 và đưa ra kết quả
// so sánh b với 1,10, 40 và đưa ra kết quả