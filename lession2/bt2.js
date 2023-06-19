// bài 2
let Input1=[1, 2, 3, 5, 4, 2, 6, 4];
let Output1 = (a) => {return a.filter((value, index, a) => a.indexOf(value) === index);};
console.log(Input1)
console.log(Output1(Input1))