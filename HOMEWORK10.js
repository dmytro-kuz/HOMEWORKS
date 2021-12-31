*****************Task 1*******************

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]



*****************Task 2*******************

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names: [name1, name2, name3, name4], ages:[age1, age2, age3, age4]} = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26



*****************Task 3*******************
function mul(...rest) {
    let total = 1; 
    let num;
       for(let i = 0; i < rest.length; i++){

           if(typeof(rest[i]) === 'number' ){
               total*=rest[i];
               num = 0;
           }
        }
      if (num !== 0) {
          return 0
      }
       return total;
   }


console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0



*****************Task 4*******************
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "")
    }
 };
 
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },

    notification: function () {
       return ( callback => this.result = callback()
       );
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"




*****************Task 5*******************

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

const map1= new Map();
let map = mapBuilder(keys, values)

function mapBuilder (keysArray, valuesArrays){
    for(let i = 0; i < 4; i++){ 
        map1.set(keysArray[i], valuesArrays[i] )
    }
}

console.log(map1.size); // 4
console.log(map1.get(2))
