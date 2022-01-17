// deno-lint-ignore-file

// In JavaScript, functions can have properties in addition to being callable.
// However, the function type expression syntax doesn’t allow for declaring properties.
// If we want to describe something callable with properties, we can write a call signature in an object type:
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
  const myFn = (someArg: number) => {
    return someArg > 5;
  };
  myFn.description = 'checks if arg is greater than 5';
  
doSomething(myFn)
