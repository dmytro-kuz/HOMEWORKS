// **************** Task 1 ********************
let wind = window.open("about:blank", 'newWind', "width=300,height=300");

function size() {
    wind.resizeTo(500, 500);
}

function move() {
    wind.moveTo(200, 200);
}

function close() {
    wind.close()
}
setTimeout(size, 2000);
setTimeout(move, 4000);
setTimeout(close, 6000);



// **************** Task 2 ********************

document.querySelector('button').onclick = changeCSS;
// document.querySelector('button').addEventListener('click', changeCSS);

function changeCSS() {
   let text = document.querySelector('#text');
   text.style.color = 'orange';
   text.style.fontSize = '20px';
   text.style.fontFamily = 'Comic Sans MS';
}



// **************** Task 3 ********************

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let link = document.querySelector('#link');
let backGr = document.body.style;

btn1.addEventListener('click', () => {backGr.background = 'blue'});
btn2.addEventListener('dblclick', () => {backGr.background = 'pink'});
btn3.addEventListener('mousedown', () => {backGr.background = 'brown'});
btn3.addEventListener('mouseup', () => {backGr.background = 'white'});
link.addEventListener('mouseover', () => {backGr.background = 'yellow'});
link.addEventListener('mouseout', () => {backGr.background = 'white'});



// **************** Task 4 ********************

let del = document.querySelector('#btn');
let elem = document.querySelectorAll('option');
let select = document.querySelector('#choose')

del.addEventListener('click', remove);

function remove() {
    elem.forEach(element => {
        if (element.selected === true) {
         element.remove();
        }
     })
}



// **************** Task 5 ********************

let liveBtn = document.querySelector('#mouse-looking');
let text = document.querySelector('#text')

liveBtn.addEventListener('click', () => {
    let p = document.createElement('p');
    p.innerHTML = 'I was pressed!'
    document.body.append(p, text)
 })

 liveBtn.addEventListener('mouseover', () => {
    let p = document.createElement('p');
    p.innerHTML = 'Mouse on me!'
    document.body.append(p, text)
 })

 liveBtn.addEventListener('mouseout', () => {
    let p = document.createElement('p');
    p.innerHTML = ' Mouse is not on me!'
    document.body.append(p, text)
 })



// **************** Task 6 ********************

let h = window.innerHeight;
let w = window.innerWidth;

document.body.innerHTML = `Width: ${w} , Height: ${h}`;

window.addEventListener('resize', () => {
    location.reload();
    document.body.innerHTML = `Width: ${w} , Height: ${h}`;
})



// **************** Task 7 ********************

const country = document.querySelector('#country');
const city = document.querySelector('#cities');
const cityArr = {
  ger: ['Berlin', 'Frankfurt', 'Munhen'],
  usa: ['New-York', 'Washington', 'Los-Angeles'],
  ukr: ['Kyiv', 'Lviv', 'Kharkiv'],
};

modify();
country.addEventListener('change', modify);

function modify() {
  city.innerHTML = '';
  let select = country.value;
  for (let i = 0; i < cityArr[select].length; i++) {
    let option = document.createElement("option");

    option.innerHTML = cityArr[select][i];
    city.appendChild(option);
  }
}
