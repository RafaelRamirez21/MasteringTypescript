type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];


// The indexing type is itself a type, so we can use unions, keyof, or other types entirely:

type I1 = Person["age" | "name"];
     
// type I1 = string | number
 
type I2 = Person[keyof Person];
     
// type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
     
// type I3 = string | boolean

//Another example of indexing with an arbitrary type is using number to get the type of an array’s elements.
//  We can combine this with typeof to conveniently capture the element type of an array literal:

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
   
  type Person3 = typeof MyArray[number];
         
//   type Person = {
//       name: string;
//       age: number;
//   }
  type Age3 = typeof MyArray[number]["age"];
       
//   type Age = number
  // Or
  type Age2 = Person["age"];
        
//   type Age2 = number