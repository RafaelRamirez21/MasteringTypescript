// deno-lint-ignore-file
class Box {
    contents: string = "";
    set(value: string) {
    
//   (method) Box.set(value: string): this
      this.contents = value;
      return this;
    }
  }
  class ClearableBox extends Box {
    clear() {
      return this.contents = "empty";
    }
  }
   
  const a = new ClearableBox();
  const b = a.set("hello");
  console.log(b);
  console.log(a.clear())