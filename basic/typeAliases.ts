// deno-lint-ignore-file no-unused-vars prefer-as-const
// Type Aliases
// We’ve been using object types and union types by writing them directly in type annotations. 
// This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point1 = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord1(pt: Point1) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
printCoord({ x: 100, y: 100 });

// Interfaces
// An interface declaration is another way to name an object type:
interface Point {
    x: number;
    y: number;
  }
   
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x); 
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });



// Literal Types
// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

// One way to think about this is to consider how JavaScript comes with different ways to declare a variable. 
// Both var and let allow for changing what is held inside the variable, and const does not. 
// This is reflected in how TypeScript creates types for literals.

let x: "hello" = "hello";
// OK
x = "hello";
// ...
// x = "howdy";

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
printText("Hello, world", "left");
// printText("G'day, mate", "centre");

// Numeric literal types work the same way:
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }


//   Of course, you can combine these with non-literal types:
interface Options {
    width: number;
  }
  function configure(x: Options | "auto"|"automatic") {
    // ...
  }
  configure({ width: 100 });
  configure("auto");
  configure("automatic");