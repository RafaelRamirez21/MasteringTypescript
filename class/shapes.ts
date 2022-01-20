// deno-lint-ignore-file
class PersonShape1 {
    private age!:number;
    private height!:number;
    private dni!:string;

    constructor(age:number,height:number,dni:string) {
        this.age=age;
        this.height=height;
        this.dni=dni;
    }
}
class Alumn extends PersonShape1{
    private enrollment!:string;
    constructor (age:number,height:number,dni:string,enrollment:string){
        super( age,height,dni );
        this.enrollment=enrollment;
    }
}

let person1:PersonShape1=new PersonShape1(23,1.22,"234343");
let student:PersonShape1=new Alumn (23,1.22,"234343","123");
