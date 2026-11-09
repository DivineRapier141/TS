// Є клас Vehicle з методом drive().
// Bicycle і Car працюють нормально, але Boat не може реалізувати цей метод коректно.

/*
class VehicleBad {
  drive() { console.log("Driving..."); }
}
class CarBad extends VehicleBad {}
class BicycleBad extends VehicleBad {}
class BoatBad extends VehicleBad {
  drive() { throw new Error("Boats can't drive on roads!"); } // ❌
}
*/



interface Vehicle {
  move(): void;
}

interface LandVehicle extends Vehicle {
  drive(): void;
}

interface WaterVehicle extends Vehicle {
  sail(): void;
}

class Car implements LandVehicle {
  move(): void { this.drive(); }
  drive(): void { console.log("Car driving..."); }
}

class Bicycle implements LandVehicle {
  move(): void { this.drive(); }
  drive(): void { console.log("Bicycle driving..."); }
}

class Boat implements WaterVehicle {
  move(): void { this.sail(); }
  sail(): void { console.log("Boat sailing..."); }
}