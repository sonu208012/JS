let num= [];
sum=0;
//num.push(-1,5,8);
//initial length

console.log("the length of an array is  "+num.length);

 //initiating or populating num array
for(let i=1;i<=10;i++)
{
    num.push(10*i);
}
console.log("the length of an array after pushing in the values is  "+num.length);

// to traverse through the array
for(let i=0;i<10;i++)
{
    sum+=num[i];  
    console.log(num[i])
}
console.log("the total is  "+sum);
var popedvalue=num.pop();
console.log(popedvalue);

console.log("the length of an array after poping out one value is  "+num.length);

//after for loop
//console.log(num.length);

//num.push(-100);

//console.log(num.length);
//accessing or displaying values of the num array
/*for(let i=0;i<num.length;i++)
{
   // console.log(num[i]);
   sum+=num[i];  
  
}*/

/*num.push(100)


console.log(num.length);
num.pop()

console.log(num.length);

sum+= num[num.length-1]
//console.log(sum);
console.log(num.sort());
*/