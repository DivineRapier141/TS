// Створи клас, який відповідає за обробку замовлень (order). Зараз у ньому також виконується логування дій.
// Розділи функціональність так, щоб логування стало окремим компонентом.
// ❌ Неправильна реалізація — один клас робить і обробку, і логування
// class OrderServiceBad {
//   processOrder(orderId: number) {
//     console.log(`Processing order #${orderId}`);
//     this.logAction(`Order ${orderId} has been processed`);
//   }

//   private logAction(message: string) {
//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp}] LOG: ${message}`);
//   }
// }


class Logger {
    log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] LOG: ${message}`);
  }
}

class OrderService {
    constructor(private logger: Logger) {}

    processOrder(orderId: number): void {
        console.log(`Processing order #${orderId}`);
        this.logger.log(`Order ${orderId} has been processed`);
    }
}