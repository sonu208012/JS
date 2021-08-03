var prompt = require('prompt-sync')();

 s = prompt('Enter the starting number ')
 e = prompt('Enter the ending number ')

for(c=Number(s); c<=Number(e); c++){
  console.log(String.fromCharCode(c));
}

