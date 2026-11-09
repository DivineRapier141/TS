// Є базовий клас Shape із методом getArea().
// Підкласи Rectangle і Square поводяться некоректно при підстановці одного замість іншого.

/*
class RectangleBad {
  constructor(public width: number, public height: number) {}
  setWidth(w: number) { this.width = w; }
  setHeight(h: number) { this.height = h; }
  getArea() { return this.width * this.height; }
}
class SquareBad extends RectangleBad {
  setWidth(w: number) {
    this.width = this.height = w; // ❌ змінює поведінку Rectangle
  }
  setHeight(h: number) {
    this.width = this.height = h; // ❌ зламує контракт батьківського класу
  }
}
*/



interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private side: number) {}

  getArea(): number {
    return this.side * this.side;
  }
}