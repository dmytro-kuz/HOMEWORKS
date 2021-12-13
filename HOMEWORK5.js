// *************** Task 1 ***************
const mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

function propsCount(currentObject) {
  return Object.keys(currentObject);
}

let result = propsCount(mentor);
console.log(result.length);




// *************** Task 2 ***************

const randObj = {
  number: 42,
  value: "rand",
  process: "work",
  bool: "true,",
  number2: 123,
};

function showProps(obj) {
  console.log(Object.values(obj));
  console.log(Object.keys(obj));
}

showProps(randObj);




// *************** Task 3 ***************

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    this.midleName = midleName;
    return this.name + " " + this.surname + " " + this.midleName;
  }
  showCourse() {
    let dateNow = new Date();
    let course = dateNow.getFullYear() - this.year;
    return course;
  }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());




// *************** Task 4 ***************

const persSalary = {};

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.fullName = fullName;
  }

  #expirience = 1.2;

  showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
  }

  showSalaryWithExperience() {
    console.log(
      `${this.fullName} salary: ${
        this.dayRate * this.workingDays * this.#expirience
      }`
    );
    persSalary[this.fullName] =
      this.dayRate * this.workingDays * this.#expirience;
    return this.dayRate * this.workingDays * this.#expirience;
  }

  showExp() {
    return this.#expirience;
  }

  get _expirience() {
    return this.#expirience;
  }

  set setExp(newExp) {
    return (this.#expirience = newExp);
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp());
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp());
worker1.showSalaryWithExperience();
console.log("------------------------------------------");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker1.showSalary();
console.log("New experience: " + worker2.showExp());
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp());
worker2.showSalaryWithExperience();
console.log("------------------------------------------");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp());
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp());
worker3.showSalaryWithExperience();
console.log("------------------------------------------");

console.log(
  "Sorted by salary:",
  Object.entries(persSalary).sort(function (a, b) {
    return a[1] - b[1];
  })
);




// *************** Task 5 ***************

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(basis, height) {
    super(basis, height);
    this.basis = basis;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.basis * this.height;
  }
}

class Square extends GeometricFigure {
  constructor(sideSquare) {
    super(sideSquare);
    this.sideSquare = sideSquare;
  }
  getArea() {
    return this.sideSquare ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super(radius);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
  let arrArea = [];
  figures.forEach((element) => {
    console.log(
      `Geometric figure: ${element.toString()} - area: ${element.getArea()}`
    );
    arrArea.push(element.getArea());
  });
  console.log("Total area: " + arrArea.reduce((sum, elem) => sum + elem));
}

handleFigures(figures);
