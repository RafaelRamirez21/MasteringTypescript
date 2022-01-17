// deno-lint-ignore-file no-unused-vars
// The primitives: string , number , and boolean
// JavaScript has three very commonly used primitives:
// string, number, and boolean. Each has a corresponding
// type in TypeScript.

// Functions

// Functions are the primary means of passing data around in JavaScript.
// TypeScript allows you to specify the types of both the input and output values of functions.
// Parameter type annotation

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

  //Object Types
  // The parameter's type annotation is an object type
function printCoord0(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
printCoord({ x: 3, y: 7 });

//Optional Properties

function printName(obj: { first: string; last?: string }) {
    // ...  
  }
  // Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });



//Union types

// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
//  Now that we know how to write a few types, it’s time to start combining them in interesting ways.
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  //printId({ myID: 22342 });


//   Working with Union Types

function printId2(id: number | string) {
    // console.log(id.toUpperCase());
//   Property 'toUpperCase' does not exist on type 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'.
  }


function printId3(id: number | string) {
if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
} else {
    // Here, id is of type 'number'
    console.log(id);
}
}

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }