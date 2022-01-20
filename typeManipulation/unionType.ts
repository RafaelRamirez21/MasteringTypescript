// deno-lint-ignore-file
type aditionParameter=string|number;
function additionOf(num1:aditionParameter,num2:aditionParameter){
    if (typeof num1==="number" && typeof num2==="number" ){
        return num1+num2 //|| Number(num1)+Number(num2)
    }
    return String(num1)+num2;
}

console.log(additionOf("2","4"))

interface Interface2{
    prop1:number;
}
interface Interface3{
    prop2:number;
}

type InterfaceMix=Interface2|Interface3;
const interfaceMix:InterfaceMix={
    prop2:2,
}
const interfaceMix2:Interface2 | Interface3={
    prop1:3,
    
}