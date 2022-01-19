// deno-lint-ignore-file
class Animal {
    move() {
      console.log("Moving along!");
    }
  }
   
  class Dog extends Animal {
[x: string]: any;
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }
   
  const d1 = new Dog();
  // Base class method
  d1.move();
  // Derived class method
  d1.woof(3);

  class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
   
  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
   
  const d = new Derived();
  d.greet();
  d.greet("reader");