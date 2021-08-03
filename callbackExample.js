


let x= () => console.log(" a message from function x")


let y= (n1,n2,callback)=>{
    callback();
    console.log(" numbers printed from function y: "+ n1 + " "+n2);
} 


let a=100;


y(a,20,x);

console.log();

y(10,20,()=>console.log(2+3));