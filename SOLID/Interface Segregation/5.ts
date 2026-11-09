// Інтерфейс Animal містить walk(), fly(), swim().
// Розбий інтерфейс так, щоб кожна тварина реалізовувала лише релевантні методи.

/*
interface AnimalBad {
  walk(): void;
  fly(): void;
  swim(): void;
}
class DogBad implements AnimalBad {
  walk() { console.log("Dog walking"); }
  fly() { throw new Error("Dog can't fly"); } // ❌
  swim() { console.log("Dog swimming"); }
}
*/



interface Walker {
  walk(): void;
}

interface Flyer {
  fly(): void;
}

interface Swimmer {
  swim(): void;
}

class Dog implements Walker, Swimmer {
  walk(): void { console.log("Dog walking"); }
  swim(): void { console.log("Dog swimming"); }
}