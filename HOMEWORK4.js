// **************** Task 1 ***************
function calcRectangleArea() {
  let width = +prompt("Ширина прямокутника");
  let height = +prompt("Висота прямокутника");
  let s = width * height;

  if (isNaN(s)) {
    throw new Error("Задано не числове значення");
  }
  return s;
}
try {
  let result = calcRectangleArea();
  console.log(result);
} catch (exception) {
  console.log(exception.message);
}


// **************** Task 2 ***************

function checkAge() {
  let userAge = +prompt("What is your age");

  if (userAge == "") {
    throw new SyntaxError("The field is empty! Please enter your age");
  } else if (isNaN(userAge)) {
    throw new TypeError("Please enter numerical value of age");
  } else if (userAge < 14) {
    throw new RangeError("You're too young");
  }
  return userAge;
}

try {
  let result = checkAge();
  console.log(result);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  alert(exception.message);
}


// **************** Task 3 ***************

const monthsName = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

class MonthException {
  constructor(message) {
    this.message = message;
  }
  name() {
    console.log(this.message);
  }
}
let monthException = new MonthException('Incorrect month number');

function showMonthName(month) {
  if (month > 12 || month < 1 || isNaN(month)) {
    console.log(monthException); 
  }
  else if (month >= 1 && month <= 12) {
    console.log(monthsName[month]);
  }
}

try {
  showMonthName(prompt())
}
catch(err) {
  console.log(err);
}


// **************** Task 4 ***************

// showUser(5);
function showUser(id) {
  let userId = { ID: id };
  if (id > 0) {
    // console.log(userId);
    return id;
  } else if (id < 0) {
    return err1;
  } else if (isNaN(id)) {
    return err2;
  }
}
let err1 = new RangeError("ID must not be negative");
let err2 = new RangeError("Wrong data");


function showUsers(ids) {
  const filterArr = [];
  console.log(ids);

  for (let i = 0; i < ids.length; i++) {
    if (showUser(ids[i]) === err1) {
      console.log(`Error: ID must not be negative: ${ids[i]}`);

    } else if (showUser(ids[i]) === ids[i]) {
      filterArr.push(`{ID: ${ids[i]} }`);
    }
  }
  console.log(filterArr);
}

showUsers([7, -12, 44, 22]);
