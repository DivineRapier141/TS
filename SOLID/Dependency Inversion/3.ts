// Клас OrderService напряму викликає ConsoleLogger.

/*
class ConsoleLoggerBad {
  log(msg: string) { console.log("Console:", msg); }
}
class OrderServiceBad {
  private logger = new ConsoleLoggerBad(); // ❌ прив’язка до конкретної реалізації
  createOrder() { this.logger.log("Order created"); }
}
*/



interface AppLogger {
  log(msg: string): void;
}

class ConsoleLogger implements AppLogger {
  log(msg: string): void {
    console.log("Console:", msg);
  }
}

class FileLogger implements AppLogger {
  log(msg: string): void {
    console.log("File:", msg);
  }
}

class OrderService {
  constructor(private logger: AppLogger) {}

  createOrder(): void {
    this.logger.log("Order created");
  }
}