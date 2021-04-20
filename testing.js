//OOP notes and playground

console.info("I am testing.")

//defining the object instance (class)
function Dog(name) {
  //using the this keywords to define the properties of the Dog object.
  this.name = name;
  this.numLegs = 4;
}

//using the constructor function to create 2 new instances of the Dog object.
let snoopy = new Dog("Snoopy");
let goofy = new Dog("Goofy");

console.info(snoopy, goofy, Dog.prototype);


//** INHERITANCE **//
// When an object inherits methods and properties from a supertype class (parent class)