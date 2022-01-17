// deno-lint-ignore-file
function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

interface Person {
name: string;
age: number;
}

function greet2(person: Person) {
return "Hello " + person.name;
}