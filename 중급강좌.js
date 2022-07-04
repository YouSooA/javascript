//var
// 한번 선언된 변수 다시 선언

var name = "Mike";
console.log(name);

var name = "Jane";
console.log(name);

// 선언하기 전에 사용 가능

console.log(name); // undefined

var name = "Mike";
 
var name; // hoisting

console.log(name); // undefined - 선언은 호이스팅 할당은 호이스팅 x

name = 'Mike'; // 할당

