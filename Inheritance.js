
<html>
<body>

<h2>JavaScript Class Inheritance</h2>

<p>Use the "extends" keyword to inherit all methods from another class.</p>
<p>Use the "super" method to call the parent's constructor function.</p>

<p id="demo"></p>
<p id="demo1"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return   'it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
myCar.present()
document.getElementById("demo").innerHTML = myCar.present();
document.getElementById("demo1").innerHTML = myCar.show();
</script>

</body>
</html>
