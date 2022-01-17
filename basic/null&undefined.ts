// deno-lint-ignore-file ban-unused-ignore no-unused-vars
// JavaScript has two primitive values used to signal absent or uninitialized value: null and undefined.

// TypeScript has two corresponding types by the same names. How these types behave depends on whether you have the strictNullChecks option on.
// deno-lint-ignore no-unused-vars
function doSomething01(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
doSomething01("")
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }
liveDangerously()