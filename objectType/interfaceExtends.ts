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