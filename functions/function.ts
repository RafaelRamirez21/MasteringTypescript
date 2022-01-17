// deno-lint-ignore-file
// The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. 
// Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) {
    console.log(s);
  }
   
  greeter(printToConsole);


type GreetFunction = (a: string) => void;
function greetervs1(fn: GreetFunction) {
    fn("Hello, World with type or aliases");
}
greetervs1(printToConsole);


function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// ---cut---
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
console.log(s)
// n is of type 'number'WS
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

//Inference

// prettier-ignore
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed)