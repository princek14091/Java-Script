// PRIMITIVE 
// 7 types : String , Number , Boolean , Null , Undifined , Symbol , BigInt
//js is Dynamically typed language 
//ts is Statistict typed language

const id = Symbol('123')
const anotherid= Symbol('123')

console.log(id===anotherid);

// Refrence (Non primitive):   Array , Objects , Functions

const  Heros = ['Saktiman','nagraj','doga'];
//objects are shown in currly braces or  difined any name ex.
let MyObj = {
    name: "Gound Prince",
    age: 20,
};
// Function

const myfunction=() => {
    console.log("Hello js world");
    
}
