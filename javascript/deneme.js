let number = "11.4"
number = Number(number);
console.log(number);

//slice methodu verdiğin değerden başlatır

let firstName = "taha";
let lastName = "karışan";
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`;

console.log(fullName);

let email = "taha@gmail.com";
let changedEmail = email.split("@");
console.log(changedEmail);



//lastİndexOf methodu verdiğin değeri sondan başlatır ve ilk bulduğu değeri döndürür
//indexof methodu ise verdiğin değeri baştan başlatır ve ilk bulduğu değeri döndürür