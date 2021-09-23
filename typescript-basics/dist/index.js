"use strict";
// Basic types in typescript
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷number
let id = 5;
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷string
let company = '❤';
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷boolean
let isPublished = true;
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷any (can be set to any data type like in dynamic typed languages)
let x = 'Something';
x = true;
// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ arrays
// ids array only containing numbers
let ids = [1, 2, 34, 5];
// ids.push('Hello'); // error
// arr array that can have data of any type
let arr = [1, true, 'jo'];
// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ Tuple - can specifiy the exact types for each of the values inside the array
// let person: [number,string,boolean] = [1,'🐱‍🚀',3]// error as the tuple defination specified that the person[2] is boolean
// let person: [number,string,boolean] = [1,true,'🐱‍🚀']; // error as person[1] must be string and person[2] must be boolean
let person = [1, '✔', false];
//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ Tuple array i.e arrays of tuple
let employee; // arrays of tuple
employee = [
    [1, '✔'],
    [2, '✔']
];
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Union - if we want one variable to hold more than one type
// a uid that can be both number & string  
let uid;
uid = 22;
uid = '💡';
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Enum - define a set of named constants either numeric or strings
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// cd dist, node index.js
console.log(Direction1.Up); //1
console.log(Direction1.Down); //2
console.log(Direction1.Left); //3
console.log(Direction1.Right); //4
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // Up
console.log(Direction2.Down); // Down
console.log(Direction2.Left); // Left
console.log(Direction2.Right); // Right
// a user const with User type
const user = {
    id: 1,
    name: 'John'
};
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Type Assertion - tells compiler that we want to treat an entity as different type
let cid = 1;
// let customerId = <number> cid 
// or
let customerId = cid;
// now customerId is a number
// customerId = true // error
customerId = 45;
// 🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠Functions
// (x: number, y: number): number
// the third number depicts function return value to be number
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// for Void(null) no return value for function
function log(message) {
    console.log(message);
}
//log(true) // error
log('Functions in typescript....');
// a user const with User type
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const john = new Person(1, 'JohnBaba');
const wick = new Person(2, 'YagaBoo');
console.log(john, wick);
//console.log(john.id); // error as id is private
console.log(john.register());
console.log(wick.register());
// 💡💡💡💡💡💡💡💡💡💡💡💡 Extending Classes
// subclass extending the parent Person class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        // does this for the base class
        // this.id = id;
        // this.name = name;
        this.position = position;
    }
}
const emp = new Employee(13, 'JaneDoe', 'Developer');
console.log(emp.register());
console.log(emp.name);
// 🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳 Generics 
// USED TO BUILD REUSABLE COMPONENTS with Placeholders for different data types
// generic angle bracket T like a placeholder
function getArray(items) {
    return new Array().concat(items);
}
// now suppose we want two different arrays one to be number & one to be array of strings
let numArray = getArray([1, 2, 3, 4]); // <number> replaces <T> placeholder
let strArray = getArray(['john', 'baba', 'kaka']); // <string> replaces <T> placeholder
//strArray.push(1); //error
