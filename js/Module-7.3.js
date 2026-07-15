// todo:          Module no- 7.3        topic: What is a Variable Five things you need to declare a variable

console.log('ashraful islam');
console.log('Tanvir Vai ');
console.log("abir vai ");

// what is a Variable: variable is spas or container . 
// 1. var  2. let  3. const . 
// how to wright variable: keywot + mining full name  + = value + ;

var name = 'ashraful islam';
var brothers= 'tanvir, abir, toha';
var number = 10000;
var isTrue = true;
var nothing = null ;
console.log(name, brothers, number, isTrue, nothing);
// var আমরা কখুনোই use করবো না । 

// আমরা সবচেয়ে বেশি use করব , let and const 
// let : let value is allays changed. 
let prise = 100;
console.log(prise);
    prise = 200;
    console.log(prise);

// const : const is allays constant . 
const pai = 3.1416;
console.log(pai);
const country = 'bangladesh';
console.log(country);



/* 
Quick comparison : 

        Frature          var            let             const 

Reassign value            true          true            false
Re-Declare                true          false           false 
Block scope               global        true            true
hoisting                  true          much safer      much safer 
Modern js                 avoid         use             use */