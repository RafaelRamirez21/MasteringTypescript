// deno-lint-ignore-file
// JavaScript functions can also be invoked with the new operator.
// TypeScript refers to these as constructors because they usually create a new object. 
// You can write a construct signature by adding the new keyword in front of a call signature:
type SomeObject=any;

type SomeConstructor = {
    new (s: string): SomeObject;
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }

const callable=(a:string):SomeObject=>{
    console.log(a)
}
type Person2 = {
  name: string;
  age: number;
};
 
function greet3(person: Person2) {
  return "Hello " + person.name;
}