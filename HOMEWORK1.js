// ------------Task 2----------------
console.log(" Last name : Kuz");

// ------------Task 3----------------
let a;
let b;    // a) 
a = 42;
b = 'Hello'  // b)
console.log(a);
console.log(b);     // c)

let c = b;          // d)
console.log(a);
console.log(b); 
console.log(c);     // e)

// ------------Task 4----------------
let undef;
let obj = {
    str: 'Hello',      //string
    num: 42,           //number
    bool: true,        //boolean
    undef: undef,      //undefined
    zero: null         //null
}
console.log(obj);
 

// ------------Task 5----------------

let isAdult = confirm('Are you adult?');
if (isAdult == true) {console.log('Person is adult')}
else console.log('Person is not adult');

// ------------Task 6----------------
let myName = 'Dmytro';
let lastName = 'Kuz';
let group = '654 JS Core';
let birth = 1998;
let married = false;

console.log(birth);     //number
console.log(married);  //boolean
console.log(myName + " " +  lastName + " from " +  group);   //string

let undef1;         
let zero1 = null; 
console.log(typeof(undef1));
console.log(typeof(zero1));

// ------------Task 7----------------
let nameOf = prompt('Your login', 'User');
let email = prompt('Your email', 'usermale@gmail.com');
let password = prompt('Your password', 'qwerty');
alert('Dear ' + nameOf + ', your email is ' + email + ', your password is ' + password);

// ------------Task 8----------------

let secInHour = 60*60;
console.log(secInHour);             //seconds in hour

let secInDay = secInHour*24;
console.log(secInDay);              //seconds in day

let secInMonth = secInDay*30;
console.log(secInMonth);            //seconds in month
