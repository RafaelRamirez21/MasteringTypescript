// deno-lint-ignore-file
function init(target:any)
{
 
    return class extends target{
        name="Rafale";
        lastname="Ramírez";
        sayMyName()
        {
            return `${this.name} ${this.lastname} in that`
        }
    }
}

@init
class Base {
    constructor() {
    }

    sayMyName(){}
}
const p:Base=new Base();
console.log(p.sayMyName());