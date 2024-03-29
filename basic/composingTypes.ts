// deno-lint-ignore-file prefer-const no-unused-vars
type MyBool = true | false;

// A popular use-case for union types is to describe the set of string or number literals 
// that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, 
// you may have a function that takes an array or a string:

function getLength(obj: string | string[]) {
    return obj.length;
  }

//   To learn the type of a variable, use typeof:
//   ---------Type	Predicate----------
// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)

// Generics
// Generics provide variables to types. A common example is an array. 
// An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

let obj2:ObjectWithNameArray=[{name:"Rafael"},{name:"Richard"}];

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
   
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
  declare const backpack: Backpack<string>;
   
  // object is a string, because we declared it above as the variable part of Backpack.
  const object = backpack.get();
   
  // Since the backpack variable is a string, you can't pass a number to the add function.
  backpack.add("23");

  