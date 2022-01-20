// deno-lint-ignore-file
function sealed(constructor: Function) {
    console.log(constructor)
    Object.seal(constructor);
    
    Object.seal(constructor.prototype);
  }

  @sealed
  class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  }

 const bug=new BugReport("bug");