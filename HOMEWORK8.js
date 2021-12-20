// ******************* Task1********************
function upperCase(strSome) {
    regExp = /^[A-ZA-Я]/g
    regExp.test(strSome) ? 
    console.log("String's starts with uppercase character"):
    console.log("String's not starts with uppercase character ");
    
}
upperCase('regexp');
upperCase('RegExp');



// ******************* Task2********************
function checkEmail(str) {
    regExp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,7}/;
    console.log(regExp.test(str)); 
}
checkEmail("Qmail2@gmail.com");


// ******************* Task3********************

let regExp = /d(b+)(d+)/i;
let str = "cdbBdbsbz";
console.log(str.match(regExp));


// ******************* Task4********************

const string = "Java Script";
let regExp = / /;
console.log((string.split(regExp).reverse([0,1]).join(', ')));



// ******************* Task5********************


let regExp = /^(\d{4}\-){3}(\d{4})$/g;

function ValidCard(cardId){
    (regExp.test(cardId)) ? console.log ('Valid is OK'): console.log('Valid is not OK');
}

ValidCard('9999-9999-9999-9999');



// ******************* Task6********************

function checkEmail(mail) {
    regExp = /[a-z0-9][a-z0-9_]+[-]{0,1}\w*@\w+\.\w{2,7}/gi;
    (regExp.test(mail) === true) ? 
    console.log('Valid is OK'): 
    console.log('Valid is not OK');
   
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_mai--l@gmail.com');



// ******************* Task7********************

function checkLogin(login){
    let regExp = /^[a-z][a-z0-9\d\.\d]{1,9}$/gi;
    console.log(regExp.test(login));
    let regExp2 = /\d+\.?\d?/g;
    // console.log(login.match(regExp2));
    console.log(login.match(regExp2).join(', '));
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');

