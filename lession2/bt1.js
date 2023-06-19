function reverseString(str) {
    // Chuyển chuỗi thành mảng các ký tự
    let charArray = str.split('');
    
    // Đảo ngược thứ tự các phần tử trong mảng
    charArray.reverse();
    
    // Chuyển mảng thành chuỗi và trả về kết quả
    return charArray.join('');
    }

  // Sử dụng function với một chuỗi ví dụ
    let inputString = "abcdef";
    let reversedString = reverseString(inputString);
    console.log(inputString);
    console.log(reversedString);


    //bài 1
// let Input ="";
// let Output = (x) => {return x.split('').reverse().join('');}
// Input = "fnffnff"
// console.log(Input);
// console.log(Output(Input));