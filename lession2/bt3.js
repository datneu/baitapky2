//bài 3
function findMostFrequentElement(arr) {
    let countMap = {};
    
    // Đếm số lần xuất hiện của từng phần tử trong mảng
    for (let i = 0; i < arr.length; i++) {
        if (countMap[arr[i]]) {
        countMap[arr[i]]++;
        } else {
        countMap[arr[i]] = 1;
        }
    }
    
    let mostFrequentElement;
    let maxCount = 0;
    
    // Tìm phần tử xuất hiện nhiều nhất và số lần xuất hiện của nó
    for (let key in countMap) {
        if (countMap[key] > maxCount) {
        mostFrequentElement = key;
        maxCount = countMap[key];
        }
    }
    
    return {
        value: mostFrequentElement,
        count: maxCount
    };
    }

  // Sử dụng chương trình với một mảng ví dụ
let Input2 = [1, 2, 3, 4, 2, 4, 2, 3, 4, 5, 5, 5];
let Output2 = findMostFrequentElement(Input2);
console.log(Output2)