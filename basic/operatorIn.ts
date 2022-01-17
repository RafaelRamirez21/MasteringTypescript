// deno-lint-ignore-file
// deno-lint-ignore ban-unused-ignore
// deno-lint-ignore-file no-unused-vars
type Fish = { swim: () => void ,name?:string};
type Bird = { fly: () => void,name?:string };
type Human = { swim?: () => void; fly?: () => void }; 

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

declare function getSmallPet(): Fish | Bird;
// ---cut---
function isFish(pet: Fish | Bird): pet is Fish {
    console.log(pet);
    
  return (pet as Fish).swim !== undefined;
}
console.log(isFish({fly:()=>console.log("wor")}))

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});