let string = "121";
let arr = string.split("");
let reversedArr = arr.slice().reverse();
let reversedString = reversedArr.join("");
// 문자열을 뒤집는다.
// 문자열을 뒤집은것과 기존의 문자열이 일치하면 true
// 아니면 false

console.log(string === reversedString);
