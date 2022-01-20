// deno-lint-ignore-file
type CallBackError=Error|null;
type CallBack={
    (error:CallBackError,response:{message:string,test?:number}):any;
    messages?:string;
}

const callTest= (error:CallBackError,response:{message:string,test?:number})=>{
    return `This is the message that was sent ${response.message}`
}
function sendRequest(cb:CallBack):void{
    if (cb) {
        const test=cb(null,{message:"hello testing",test:222})
        console.log(test)
        
    }
}

sendRequest(callTest)