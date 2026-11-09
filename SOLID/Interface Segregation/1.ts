// Є інтерфейс InputDevice з методами click(), type(), swipe().
// Розділи цей інтерфейс на окремі — для миші, клавіатури і сенсорного екрана.

/*
interface InputDeviceBad {
  click(): void;
  type(data: string): void;
  swipe(): void;
}
class MouseBad implements InputDeviceBad {
  click() { console.log("Mouse click"); }
  type(data: string) { throw new Error("Mouse can't type!"); } // ❌
  swipe() { throw new Error("Mouse can't swipe!"); } // ❌
}
*/


interface Clickable {
  click(): void;
}

interface Typeable {
  type(data: string): void;
}

interface Swipable {
  swipe(): void;
}

class Mouse implements Clickable {
  click(): void {
    console.log("Mouse click");
  }
}

class Keyboard implements Typeable {
  type(data: string): void {
    console.log("Keyboard typing: ", data);
  }
}

class TouchScreen implements Clickable, Typeable, Swipable {
  click(): void { console.log("Touch click"); }
  type(data: string): void { console.log("Touch typing:", data); }
  swipe(): void { console.log("Touch swipe"); }
}