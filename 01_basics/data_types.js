"use strict"// treat all JS code as newer version

//alert(3+3)// we are using Nodejs not browser


let name="shaiv"
let age="18"
let isLoggedIn= false

console.log(typeof undefined) //output: undefined
console.log(typeof null) //output: object


//primitive
// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score =100
const scoreValue= 100.3

const isLoggedin=false
const outsideTemp= null
let useremail;

const id = Symbol('123')
const anotherID= Symbol('123')

console.log(id=== anotherID);
const bigNumber= 3219381938933n

//reference (non primitive)
//array, objects, functions

const heroes=["shaktimaan", "nagraj", "doga"]
let myObj={
    name:"shaiv",
    age: 18,
}

const myFunction = function(){
    console.log("hello world");

}

console.log(typeof scoreValue)