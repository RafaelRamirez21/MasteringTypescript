// deno-lint-ignore-file
type Shape={
    name:string;
    shape:'circle'|'square';
}
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
  }
   
  function paintShape(opts: PaintOptions) {
      console.log(opts.shape);
      console.log(opts!.xPos);
      
    // ...
  }
   
  const shape = getShape();
  paintShape({ shape:{name:"ricard",shape:"square"} });
  paintShape({ shape:{name:"ricard",shape:"square"}, xPos: 100 });
  paintShape({shape:{name:"ricard",shape:"square"}, yPos: 100 });
  paintShape({ shape:{name:"ricard",shape:"square"}, xPos: 100, yPos: 100 });


function getShape() {
throw new Error("Function not implemented.");
}
