// Ієрархія Bird → Eagle, Penguin.
// Потрібно, щоб жоден підклас не порушував поведінку базового класу, якщо його підставити замість Bird.

/*
class BirdBad {
  fly() { console.log("Flying..."); }
}
class EagleBad extends BirdBad {}
class PenguinBad extends BirdBad {
  fly() { throw new Error("Penguins can't fly!"); } // ❌ порушення LSP
}
*/



interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

class Eagle implements FlyingBird {
    eat() {}
    fly() {console.log("Flying...");}
}

class Penguin implements Bird {
    eat() {}
}