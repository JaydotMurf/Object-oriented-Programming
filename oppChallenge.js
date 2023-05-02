// TODO: Part One
// TODO: Create a class for vehicle. Each vehicle instance should have the following properties:

// TODO: make
// TODO: model
// TODO: year
// TODO: Each vehicle instance should have access to a method called honk, which returns the string “Beep.”

// TODO: let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// TODO: myFirstVehicle.honk(); // "Beep."
// TODO: Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

// TODO: let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// TODO: myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return `Beep`;
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());

// TODO: Part Two
// TODO: Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

// TODO: let myFirstCar = new Car("Toyota", "Corolla", 2005);
// TODO: myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
// TODO: myFirstCar.honk();     // "Beep."
// TODO: myFirstCar.numWheels;  // 4

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car('Toyota', 'Corolla', 2005);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheels);

// TODO: Part Three
// TODO: Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

// TODO: let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// TODO: myFirstMotorcycle.toString();
// // "The vehicle is a Honda Nighthawk from 2000."

// TODO: myFirstMotorcycle.honk();     // "Beep."
// TODO: myFirstMotorcycle.revEngine(); // "VROOM!!!"
// TODO: myFirstMotorcycle.numWheels;  // 2

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return `VROOM!!!`;
  }
}

let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);
console.log(myFirstMotorcycle.honk());
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheels);

// TODO: Part Four
// TODO: Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

// TODO: A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

// TODO: let garage = new Garage(2);
// TODO: garage.vehicles; // []
// TODO: garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
// TODO: garage.vehicles; // [Car]
// TODO: garage.add("Taco"); // "Only vehicles are allowed in here!"

// TODO: garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// // "Vehicle added!"
// TODO: garage.vehicles; // [Car, Motorcycle]

// TODO: garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// // "Sorry, we're full."

class Garage {
  constructor(capacity, vehicles = []) {
    this.capacity = capacity;
    this.vehicles = vehicles;
  }
}

let garage = new Garage(2);
console.log(garage.vehicles);
