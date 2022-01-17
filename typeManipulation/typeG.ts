// deno-lint-ignore-file
export {}
function identity<Type>(arg: Type): Type {
    return arg;
  }
   
let myIdentity: <Type>(arg: Type) => Type = identity;

console.log(myIdentity("string_testing"));
let myIdentity2: <Input>(arg: Input) => Input = identity;
let myIdentity3: { <Type>(arg: Type): Type } = identity;


interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }
   
  function identityWithInterface<Type>(arg: Type): Type {
    return arg;
  }
  let myIdentityWithInterface: GenericIdentityFn = identityWithInterface;