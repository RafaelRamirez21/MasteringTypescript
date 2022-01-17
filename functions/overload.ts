// deno-lint-ignore-file
// Writing Good Overloads
// Like generics, there are a few guidelines you should follow when using
//  function overloads. Following these principles will make your function
//   easier to call, easier to understand, and easier to implement.

// Let’s consider a function that returns the length of a string or an array:

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}