// deno-lint-ignore-file
function logProperty( target:any,key:any){
   
    let _val:any=target[key];
    const getter=()=>{
        console.log(`Get:${key} =>${_val}`)
        return _val
    }
    const setter=(newValue:any)=>{
        console.log(`Set:${key} =>${_val}`)
        _val=newValue;
    }
    const objectProperty={
        get:getter,
        set:setter
    }
    Object.defineProperty(target,key,objectProperty)
}
class PeopleBase{
    @logProperty
    public name!: string;

    constructor(name:string){
        this.name=name;
    }
    
}

const person07=new PeopleBase('Richard');

person07.name="Ricardo";
const nameFromClass=person07;
