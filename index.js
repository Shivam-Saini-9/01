//  Swich statment

function swich() {
  let ch = parseInt(prompt("Enter the number"));

  switch (ch) {
    case 1:
      console.log("case 1 is print");
      break;
    case 2:
      console.log("case 2 is print");
      break;
    case 3:
      console.log("case 3 is print");
      break;
    case 4:
      console.log("case 4 is print");
      break;
    case 5:
      console.log("case 5 is print");
      break;
    case 6:
      console.log("case 6 is print");
      break;
    case 7:
      console.log("case 7 is print");
      break;
    default:
      console.log("You pressed wrong choice");
      break;
  }
}

function loop() {
  let j = parseInt(prompt("Enter the table number"));

  if (j == j) {
    // /For loop
    j = --j;
    console.log("via for loop");
    for (let i = 1; i <= 10; i++) {
      console.log(`${j} X ${i} = ${j * i} `);
      document.write(`${j} x ${i} = ${j * i} <br> `);
    }
    document.write("<br>");
    // while loop
    console.log("via wile loop");
    var i = 1;
    j = ++j;
    while (i <= 10) {
      console.log(`${j} X ${i} = ${j * i} `);
      document.write(`${j} x ${i} = ${j * i} <br> `);
      i++;
    }
    document.write("<br>");
    // Do While
    console.log("via Do While Loop");
    var k = 1;
    j = ++j;
    do {
      console.log(`${j} X ${k} = ${j * k} `);
      document.write(`${j} x ${k} = ${j * k} <br> `);
      k++;
    } while (k <= 10);
    document.write("<br>");
  } else {
    console.log("This is not na Number");
  }
}

// Functions

// self evoke function
function selfEvockFun() {
  (function () {
    console.log("Good Job");
  })();
}

function arrowFun() {
  let a = parseInt(prompt("Enter the value of a"));
  let b = parseInt(prompt("Enter the value of b"));
  let ao = (a, b) => {
    console.log("Apply Addition = ", a + b);
    console.log("Apply Subtrection = ", a - b);
    console.log("Apply Multiplication = ", a * b);
    console.log("Apply Divide = ", a / b);
  };
  ao(a, b);
}

// splice
function splice() {
  let name = [100, 200, "Shivam", 300, 400, 500, 600, 700, 800];
  console.log(name);
  name.splice(3, 0, "Saini");
  console.log(name);
  let a = name.splice(4, 9);
  console.log(name);
  console.log(a);
  console.log(splice);
}

// Array with for each
function foreach() {
  let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  num.forEach((val, index, array) => {
    console.log(val, index, array);
  });

  console.log(foreach);
}
function arrmap() {
  let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  let a = num.map((val, index, array) => {
    console.log(val, index, array);
  });
  console.log(a);
  console.log(arrmap);
}
function filter() {
  let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  let b = num.filter((val) => {
    if (val <= 80 && val >= 40) {
      console.log(val);
    }
  });
  console.log(b);
  console.log(filter);
}

function find() {
  let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  let c = num.find((val, ind, arr) => {
    return val == 50;
  });
  console.log(c);
  console.log(find);
}

function split() {
  let d = "20,30,40"; // This is a sring
  let arr = d.split(","); // split kr rahe hai string ko jaha jaha se coma lga hua hai
  arr.map((element) => {
    console.log(element);
  });
  console.log(split);
}
function join() {
  let arr = [10, 20, 30];
  console.log(arr);
  let jo = arr.join(" ** ");
  console.log(jo, typeof jo);
  console.log(join);
}

// Forin Foroff Loop

function ForInForOf() {
  let arr = [10, 20, 30, 40, 50];
  console.log("This is For in (We can print index)");
  for (let abc in arr) {
    console.log(abc);
  }
  console.log("This is For out (We can print Value)");
  for (let abc of arr) {
    console.log(abc);
  }
  console.log(ForInForOf);
}

// Now we start Multy Dimension Array

function muldemarr() {
  let arr = [
    ["Shivam", 22],
    ["Anshu", 23],
    ["Jatin", 23],
  ];

  // via for Loop
  console.log("Via For Loop");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  // via forEach loop
  console.log("Via ForEach Loop");

  arr.forEach((element) => {
    element.forEach((val) => {
      console.log(val);
    });
  });

  // via for of loop
  console.log("Via ForOf Loop");

  for (let ar of arr) {
    for (let a of ar) {
      console.log(a);
    }
  }
  console.log(muldemarr);
}


// copy and spred
function copyandspred() {
  // 1st way
  console.log("1st way");
  let arr = [10, 30, 40, 50, 60, 70];
  
  {
    let arr2 = arr.slice(0).concat('Slow');
    console.log(arr2);
    arr2.push("Word");
    console.log(arr2);
    console.log(arr);
  }
  // 2nd method
  {console.log('2nd way');
  let arr2 = [...arr].concat('rolly');

  console.log(arr2);}
  console.log(copyandspred);
}

// array destructuring
function arrdestructuring(){
  let arr = [10,20,30,40,50,60,70,80,90];
  let [inp1, inp2, inp3, inp4,...inp5] = arr;
  console.log(inp1);
  console.log(inp2);
  console.log(inp3);
  console.log(inp4);
  console.log(inp5);

  console.log(arrdestructuring);
}


// object
function obje(){
  let obj = {
    Name: "Shviam",
    Age: 22,
    rollNo: 99,
    "last Name" : "Saini",
    fun: ()=>{
      console.log("I M a Function");
    },
    arr:[989,690,492,222]
  };
  console.log(obj);
  console.log(" ");
  
  console.log(obj.Name);
  console.log(obj["Name"]);
  console.log(obj["last Name"]);
  console.log(obj.arr);
  console.log(obj.fun());
  console.log(obj);
  
  console.log(" ");
  // insert a key and value
  obj.ley=101;
  let a = "KEY2";
  obj[a] = "Item2";
  
  for(let i in obj){
    console.log(i);
  }
  console.log(" ");
  for(let i in obj){
    console.log(obj[i]);
  }
  // for(let i of obj){
    // console.log(i);          // Thats not work not iterable
  // }
  console.log(" ");
  for(let i of Object.keys(obj)){
    console.log(i);
  }
  for(let i of Object.keys(obj)){
    console.log(obj[i]);
  }

  // calculate length
    let l =0;
    for (let hfh in obj){
      l++;
    }
    console.log(l);
    console.log(obje);
}


// object in array

function objarr(){
  let arr = [
    {user:1,name:"shivam",age:22},
    {user:2,name:"jat",age:23},
    {user:3,name:"ans",age:24},
    {user:4,name:"gns",age:24}
  ];

  for(let i of arr){
    console.log(i.name);
  }
  for(let i of arr){
    console.log(i);
  }

  // destructing
  let [{name}, , in3,{name:name1}] = arr;
  console.log(name);
  console.log(in3);
  console.log(name1);



  console.log(arr);
  console.log(objarr);
}



// Time for Function inside a Function

function funinfun(){
var a = 10;
  function fun(){
    console.log("I am Function : ",a);
          function fin(){
            var a = 15
            console.log("I am function : ",a);  //lexical scope
          }
          fin()
  }
  fun()
}

// Debugger
function debug(){
  debugger
  for (let i = 1; i <= 5; i++) {
    console.log(i);    
  }
}

// set

function set() {
  let arr = [30,40,50,60,50];
  console.log(arr);
  let s = new Set ([30,40,50,60,50])
  // Add value on sets
  s.add(10);
  s.add("Shiv");
  console.log(s);
  // calculate the length of set
  let l=0;
  for(i of s){
    l++
  }
  console.log(l);
  console.log(set);
}

// Maps   // Data structor Map  // Object map

function map(){
  var map1 = new Map ([[1,"Shivam"],["Age",22],["Class",[1,2,3,4,5]]])

  console.log(map1);
  console.log(map1.get(1));
  console.log(map1.get("Age"));

  var map2 = new Map();
  console.log(map2);
  map2.set("fname", "Saini");
  console.log(map2);


  var k = map1.keys();
  for (let v of k){
    console.log(v);
  }
  
  
  console.log(map);
}

// This

function This(){
  let obj = {
    fname:"Shviam",
    age: 22,
    fun: function(){
      console.log(this.fname,obj.fname);
    }   // 
  }
  obj.fun()
  console.log(This);
}

// New

function New(){
  function fun(){
    let fname = "Shiva";
    // console.log(this.fname=fname);     // he can see window objecct
    this.fname=fname;
  }
  console.log(new fun());

  var obj=new fun();
  console.log(obj.fname);
  // new fun();
  // console.log(new fun());
  console.log(New);
}


// Constructor

// 01.) They are named with capital letter first.
// 02.) They should be executed only with "new" operator.

function Constructor(){
  function Abc(name){
    if (!new.target) {
      return new Abc(name);
    }
    this.name=name
  }

  let per =  Abc("Shiv")

  console.log(per);
  console.log(Constructor);
}

// Symbol.
// it represent a unique identifier.
function Symbole(){
  let sym = Symbol("id");
  let sym2 = Symbol("id");
  console.log(sym);
  console.log(sym.toString());
  console.log(sym.description);
  console.log(sym==sym2);
  console.log(sym===sym2);

  let id =  Symbol("id");
  let obj = {
    "Devo Ke Dev": "MahaDev",
    hello:"Hello",
    [id]: 1,
  }


  // console.log(obj."Devo Ke Dev");
  console.log(obj["Devo Ke Dev"]);
  // document.write(obj["Devo Ke Dev"]);
  console.log(obj[id]);
  console.log(obj.hello);

  let obj1 = {
    fname:"bhb",
    agr: 55,
  }
  obj1[id]=1;
  console.log(obj1);

  // Thsi time for a loop

  for(let key in obj){
    console.log(key);
  }
  for(let key of Object.values(obj)){
    console.log(key);
  }
  console.log(Symbole);
}


// /Recursion
// it means function calling itself;

function Recursion(){
  function fun(s){
    if (s<=10) {
      console.log(s);
      fun(s+1);
    }
  }
  fun(5);
}
