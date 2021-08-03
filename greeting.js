 var welcome;  
 date = new Date();  
 hour = date.getHours();  
 var minute = date.getMinutes();  
 var second = date.getSeconds();  

 if(hour<12)
 welcome="good morning..";
else if(hour >=12 && hour <=16) 
  welcome="good afternoon....";
else
  welcome="Hello..";
console.log(welcome);

// for(let time=1; time<=100000; time++)
// {
//     date= new Date();  
//     hour = date.getHours();  
//     minute = date.getMinutes();
//     second = date.getSeconds(); 
//    console.log(hour+ ":"+minute+ ":"+second);
// }


process.stdout.write('test  ');
process.stdout.write('test')
