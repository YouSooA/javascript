const name = "Mike";
const age = 30;

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;
console.log(message3);

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4);

const name = "Mike";

console.log(typeof 3); //number
console.log(typeof name); //string
console.log(typeof true); //boolean
console.log(typeof null); //object라고 뜨지만 사실 null != object
console.log(typeof undefined); // undefined





// prompt, confirm, alert

const name = prompt("이름을 입력하세요.");
alert("환영합니다. " + name + "님");
alert(`환영합니다. ${name} 님`);
console.log(name)

const name = prompt("예약일을 입력해주세요.","2022-07-");
console.log(name);

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult);





// String, Number, Boolean

console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
)

console.log(
  Number(true), // 1
  Number(false) // 0
)

console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN) 
)





// 증가연산자

let num = 10;
let result = num++;
console.log(result); // 10

let num = 10;
let result = ++num;
console.log(result); // 11

// 동등 연산자

const a = 1;
const b = "1";
console.log(a == b); // True

// 일치 연산자

console.log(a === b) // False





// if, else, else if

const age = 19;

if(age > 19) {
  console.log("환영합니다.");
} else if(age === 19) {
  console.log("수능 잘치세요.");
} else {
  console.log("안녕히 가세요.");
}

console.log("-------------------------")





// OR - 통과

const name = "Mike";
const age = 30;

if(name === "Tom" || age > 19){
  console.log("통과");
} else {
  console.log("돌아가.");
}

// AND - 통과

const name = "Mike";
const age = 30;

if(name === "Mike" && age > 19){
  console.log("통과");
} else {
  console.log("돌아가.");
}

// NOT - 성인이 아니면 돌아가

const age = prompt("나이가...?");
const isAdult = age > 19;

if(!isAdult) {
  console.log("돌아가...");
}

// 우선순위(And > Or)
// 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = "F";
const name = "Jane";
const isAdult = true;

if(gender === "M" && name === "Mike" || isAdult) {
  console.log("통과");
} else {
  console.log("돌아가.");
} // 통과

if(gender === "M" && (name === "Mike" || isAdult)) {
  console.log("통과");
} else {
  console.log("돌아가.");
} // 돌아가





// 반복문
// for - 1~10 출력

for(let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// while

let i = 0;

while(i < 10) {
  console.log(i);
  i++;
}

// break

while(true) {
  let answer = confirm("계속 할까요?");
  if(!answer) {
    break;
  }
}

// continue

for(let i = 0; i < 10; i++) {
  if(i%2) {
    continue;
  }
  console.log(i);
} // 0,2,4,6,8

// switch

let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit) {
  case '사과' :
    console.log('100원 입니다.');
    break;
  case '바나나' :
    console.log('200원 입니다.');
    break;
  case '키위' :
    console.log('300원 입니다.');
    break;
  case '멜론' :
  case '수박' :
    console.log('400원 입니다.');
    break;
  default :
    console.log('그런 과일은 없습니다.');
}





// 함수 작성
// 매개변수가 없는 함수

function showError() {
  alert('에러가 발생했습니다. 새로고침 해주세요.');
}

showError();

// 매개변수가 있는 함수
// 1)

function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello('Mike');
sayHello('Tom');
sayHello('Jane');

// 2)

function sayHello(name) {
  let msg = `Hello`;
  if(name) {
    msg += `, ${name}`;
  }
  console.log(msg);
}

sayHello(); // "Hello"
sayHello('Mike'); // "Hello, Mike"

// 지역변수 함수 외부에서 사용하는 예시

let msg = `Hello`;
console.log('함수 호출 전')
console.log(msg) // "Hello"

function sayHello(name) {
  if(name) {
    msg += `, ${name}`;
  }
  console.log('함수 내부')
  console.log(msg);
}

sayHello('Mike'); // "함수 내부" "Hello, Mike"

console.log('함수 호출 후')
console.log(msg); // "Hello, Mike"

// 전역 변수와 지역 변수

let msg = 'welcome'; // 전역 변수
console.log(msg); // "welcome"

function sayHello(name) {
  let msg = 'Hello'; // 지역 변수
  console.log(msg + ' ' + name);
}

sayHello('Mike'); // "Hello Mike"
console.log(msg); // "welcome"

// undefined인 경우
// 1)

function sayHello(name) {
  let newName = name || 'friend';
  let msg = `Hello ${newName}`;
  console.log(msg);
}

sayHello(); // newName = friend를 반환 -> "Hello friend"
sayHello("Mike"); // "Hello Mike"

// 2)

function sayHello(name = 'friend') {
  let msg = `Hello ${name}`;
  console.log(msg);
}

sayHello(); // "Hello friend"
sayHello("Mike"); // "Hello Mike"

// return 으로 값 변환
// 1)

function add(num1, num2) {
  return num1 + num2;
}

const result = add(2,3);
console.log(result); // 5

// 2)

function showError() {
  alert('에러가 발생했습니다.');
  return; // 함수 종료
  alert('이 코드는 절대 실행되지 않습니다.')
}

const result = showError();
console.log(result); // undefined 반환

// 함수 선언문

sayHello(); // 함수 선언보다 위에 있는데 "Hello" 반환

function sayHello() {
  console.log('Hello');
}

// 함수 표현식

let sayHello = function() {
  console.log('Hello');
}

// 화살표 함수
// 1)

let add = (num1, num2) => {
  return num1 + num2;  
}

// 2) 괄호도 가능

let add = (num1, num2) => (
  return num1 + num2;  
)

// 3) 인수가 2개면 괄호

let add = (num1, num2) => num1 + num2;

// 4) 인수가 1개면 괄호 생략

let sayHello = name => `Hello ${name}`;

// 5) 인수가 없다면 괄호 필수

let showError = () => {
  alert(`error!`);
}

// 6)

let add = (num1, num2) => {
  const result = num1 + num2;
  return result;
}

sayHello();





// 객체
// 객체 생성

const superman = {
  name : 'clark', 
  age : 30,
}; // name, age: key,  'clark', 30: 값

// 접근

console.log(superman.name); // "clark"
console.log(superman['age']); // 30
console.log(superman) // 객체 출력

// 추가

superman.hairColor = 'black';
superman['hobby'] = 'football';

// 삭제

delete superman.age;

// 객체 생성하는 함수

function makeObject(name, age) {
  return {
    name : name,
    age : age,
    hobby : 'football'
  }
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

// 위와 동일한 결과

function makeObject(name, age) {
  return {
    name,
    age,
    hobby : 'football'
  }
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

// 객체 in

console.log('age' in Mike);
console.log('birthday' in Mike);

// 다른 예시

function isAdult(user) {
  if(!('age' in user) || user.age < 20) { 
    return false; // 유저에 age가 없거나 20세 미만이면 false 반환
  } 
  return true;
}

const Mike = {
  name : 'Mike',
  age : 30
};

const Jane = {
  name : 'Jane'
};

console.log(isAdult(Jane));

// 객체 for ... in
// 1) 키 반환

const Mike = {
  name : 'Mike',
  age : 30,
};

for(x in Mike) {
  console.log(x) // 키 반환
}

// 2) 값 반환

const Mike = {
  name : 'Mike',
  age : 30
};

for(x in Mike) {
  console.log(Mike[x]) // 값 반환
}

// method

const superman = {
  name: 'clark'. 
  age: 33,
  fly : function() {  
    console.log('날아갑니다')
  }
};

superman.fly() // "날아갑니다"

// 위 코드와 동일

const superman = {
  name: 'clark'. 
  age: 33,
  fly() {  
    console.log('날아갑니다')
  }
};

// 예시

let boy = {
  name : 'Mike',
  showName : function() {
    console.log(boy.name);
  }
};

boy.showName(); // "Mike"

// 예시

let boy = {
  name : 'Mike',
  showName : function() {
    console.log(boy.name);
  }
};

let man = boy;
man.name = 'Tom';

console.log(boy.name); // Tom

// 예시

let boy = {
  name : 'Mike',
  showName : function() {
    console.log(this.name);
  }
};

let man = boy;
man.showName(); // 'Mike'

// 예시

const user = {
  name : 'Mike',
  sayHello : function() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

user.sayHello() // "Hello, I'm Mike"

// 화살표 함수는 자신만의 this를 가지지 않음, 외부에서 값을 가져옴

let boy = {
  name : 'Mike',
  sayHello : () => {
    console.log(this); // 전역 객체
  }
}

boy.sayHello(); // this != boy





// 배열

let days = ['mon', 'tue', 'wed'];

console.log(days);

// 변환

let days = ['mon', 'tue', 'wed'];

days[1] = "화요일"
console.log(days);

// 배열의 길이

console.log(days.length);

// 배열 끝에 추가

days.push("thu");

// 배열 앞에 추가

days.unshift("sun");

// 배열 for 반복문

for(let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

// 배열 for ... of

for(let x of days) {
  console.log(x);
}

