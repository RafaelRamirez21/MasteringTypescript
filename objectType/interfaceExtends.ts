// deno-lint-ignore-file
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
   
  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }


  //multiples extends
  interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {}
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };
  type Dni=number;
  interface People{
    height?:number;
    age:number;
    name:string;
    lastname:string;
    dni:Dni;
  }

  const person0:People={
    height:1.56,
    age:21,
    name:"Gio",
    lastname:"Worked",
    dni:123432,
  }