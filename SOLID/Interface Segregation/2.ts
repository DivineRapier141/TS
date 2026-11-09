// Інтерфейс OfficeMachine має методи print(), scan(), fax().
// Клас SimplePrinter реалізує лише print(), решта не потрібні.

/*
interface OfficeMachineBad {
  print(): void;
  scan(): void;
  fax(): void;
}
class SimplePrinterBad implements OfficeMachineBad {
  print() { console.log("Printing..."); }
  scan() { throw new Error("No scanner!"); } // ❌
  fax() { throw new Error("No fax!"); } // ❌
}
*/



interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}

class SimplePrinter implements Printer {
  print(): void {
    console.log("Printing...");
  }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(): void { console.log("Printing..."); }
  scan(): void { console.log("Scanning..."); }
  fax(): void { console.log("Faxing..."); }
}