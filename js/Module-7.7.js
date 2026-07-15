// todo:    Module no -7.7         topic:   Know the Fundamentals of JS Numbers

const firstName = 'Md Ashraful';
const lastName  = 'Islam';

const Fullname = firstName +' ' + lastName ;
console.log(Fullname);

const firstNumber = 20;
const secondNumber = 29;
const total = firstNumber + secondNumber;
console.log(total);

const car = 20;
const phone = 20;
const totalPrise = phone + car;

console.log(totalPrise);



// how to convert data type : 
const mousePrise = '200';
const keyboardPrise = 300.3;
// const totalBuy = mousePrise + keyboardPrise;

//  string to number convert : 
const totalBuy = parseInt(mousePrise) + keyboardPrise;
console.log(totalBuy);

const convertNumber = parseInt(mousePrise) + parseFloat(keyboardPrise);

console.log(typeof mousePrise);
console.log(typeof keyboardPrise);
console.log(convertNumber);


// float sum : 
const firstDecimal= 0.1;
const secondDecimal = 0.2;
const totalDecimal = firstDecimal + secondDecimal;
const toFixedDecimal =totalDecimal.toFixed(3);
console.log(totalDecimal);
console.log(toFixedDecimal);


// use t

