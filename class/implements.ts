// deno-lint-ignore-file
interface Checkable {
    check(name: string): boolean;
  }
   
  class NameChecker implements Checkable {
    check(s:any) {
//   Parameter 's' implicitly has an 'any' type.
      // Notice no error here
      return s.toLowercse() === "ok";
                   
//   any
    }
  }