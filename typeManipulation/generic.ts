// deno-lint-ignore-file
function identity<Type>(arg: Type): Type {
    return arg;
  }
  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log((arg[0] as unknown as string).length);
    return arg;
  }
  let output = identity<string>("myString");
  let output2 = identity("myString");
  let output33 = loggingIdentity(["myString"]);