var input = require('prompt-sync')();


var s= input('Starting value ');
var n = input('ending value  ');

//s =  Number(s)
n= Number(n)

console.log(typeof(s))
console.log(typeof n)

for(var i=s; i<=n; i++)
{
    console.log(i)
}
