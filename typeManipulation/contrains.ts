// deno-lint-ignore-file
export {}

interface Lengthwise {
    length: number;
  }
   

  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }

  loggingIdentity("jo")
  loggingIdentity({ length: 10, value: 3 });