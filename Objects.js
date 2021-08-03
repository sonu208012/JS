let person = 
    {
       fname:"John",lname:"Smith",address:"101 some street",age:35,
       fullName: function() { 
                   return this.fname+ this.lname
                 } 
    }
     



console.log(person.fullName() +" "+person.address);