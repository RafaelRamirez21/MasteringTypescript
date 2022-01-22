// deno-lint-ignore-file


function logParameter(target:any,propertyName:any,index:any){
    const metadataKey=`log_${propertyName}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }else{
        target[metadataKey]=[index]
    }
}
class P{
    greet(@logParameter message:string):string{
        return message
    }
}

const p09=new P();
p09.greet('hola testing');