let p= new Promise((res, rej)=>{
let sum = 1+2;
if (sum==3){
    res(sum); 
    setTimeout(console.log("hello from async code..."),5000);
    
}else {
    rej("failed..");
}
})

console.log("hello...");

p.then((value)=>{
 console.log("Success...."+value);
 return value;
}).then((value)=>{
   if(value%2 ==0)
      console.log(value+ " is an even number");
   else
   console.log(value+ " is an odd number");
}).catch((msg)=>{
    console.log("printing result within 'catch'..."+msg);
   })
