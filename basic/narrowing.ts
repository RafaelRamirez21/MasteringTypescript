// deno-lint-ignore-file no-unused-vars
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
  }
  function printAll(strs: string | string[] | null) {
      if(strs!==null){
              if (typeof strs === "object") {
                  console.log(strs);
                  
                    for (const s of strs) {
                
                        console.log(s);
                    }
                    } else if (typeof strs === "string") {
                    console.log(strs);
                    } else {
                    // do nothing
                    }
      }else{
          console.log("is null")
      }

  }

//   printAll(["hello","hello2"]);



  interface Container {
    value: number | null | undefined;
  }
   
  function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
      console.log(container.value);

   
      // Now we can safely multiply 'container.value'.
      container.value *= factor;
      console.log(container.value);
    }else{
        console.log("value not found ");
        
    }
  }
multiplyValue({value:null},2)