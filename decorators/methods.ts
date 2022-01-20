// deno-lint-ignore-file


function log(target:any,key:any){
    console.log(key+" was called")
}
class People {
    private name!:string;



    constructor(name:string) {
        this.name=name;
    }
    @log
    sayMyName(){
        console.log(this.name);
    }
}
const person03:People=new People("Richard");
person03.sayMyName()