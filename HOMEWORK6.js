// ******************* Task 1 ************************
document.body.firstElementChild.innerHTML = "Last";

document.querySelector("#test").innerHTML = "Last";

document.getElementById("test").innerHTML = "Last";

document.body.innerHTML = "Last";



// ******************* Task 2 ************************
document.querySelector(".image").src = "cat.jpg";



// ******************* Task 3 ************************
let parag = document.querySelectorAll("div > p");



for (let i = 0; i < parag.length; i++) {
  console.log(`Selector text ${i} : ${parag[i].innerHTML}`);
}



// // ******************* Task 4 ************************
let list = document.querySelectorAll("ul > li");
console.log(
  `${list[0].innerHTML}, ${list[4].innerHTML}, ${list[1].innerHTML}, ${list[3].innerHTML}, ${list[2].innerHTML}`
);



let list1 = document.getElementsByTagName("li");
console.log(
  `${list1[0].innerHTML}, ${list1[4].innerHTML}, ${list1[1].innerHTML}, ${list1[3].innerHTML}, ${list1[2].innerHTML}`
);

let list3 = document.querySelector("ul").children;
console.log(
  `${list3[0].innerHTML}, ${list3[4].innerHTML}, ${list3[1].innerHTML}, ${list3[3].innerHTML}, ${list3[2].innerHTML}`
);

let list4 = document.getElementById("list").childNodes;
console.log(`${list4[1].innerHTML}, ${list4[1].innerHTML} `);



// ******************* Task 5 ************************

document.querySelector("h1").style.backgroundColor = "#82db82";

let par = document.getElementsByTagName("p");
par[0].style.fontWeight = "bold";
par[1].style.color = "red";
par[2].style.textDecoration = "underline";
par[3].style.fontStyle = "italic";

document.querySelector("ul").style.listStyle = "none";

document.getElementById("myList").style.display = "flex";
document.getElementById("myList").style.listStyle = "none";

document.querySelector("span").style.opacity = "0";



// ******************* Task 6 ************************

document.getElementById("input1").value = prompt();
document.getElementById("input2").value = prompt();

document.body.prepend(document.getElementById("input2"));



// ******************* Task 7 ************************

let main = document.createElement("main");
main.className = "mainClass check item";
let div = document.createElement("div");
div.id = "myDiv";
let p = document.createElement("p");
p.innerHTML = "First paragraph";

document.body.prepend(main);
document.querySelector(".mainClass").prepend(div);
document.querySelector("#myDiv").prepend(p);
