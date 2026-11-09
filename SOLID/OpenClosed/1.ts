// Є клас PaymentProcessor, який у методі process() перевіряє тип платіжної системи (visa, paypal, applePay).
// Реорганізуй код так, щоб можна було додавати нові платіжні системи без зміни PaymentProcessor.

/*
class PaymentProcessorBad {
  process(amount: number, type: string) {
    if (type === "visa") {
      console.log("Processing Visa payment:", amount);
    } else if (type === "paypal") {
      console.log("Processing PayPal payment:", amount);
    } else if (type === "applePay") {
      console.log("Processing ApplePay payment:", amount);
    } else {
      console.log("Unknown payment type!");
    }
  }
}
*/


interface PaymentStrategy {
  process(amount: number): void;
}

class VisaPayment implements PaymentStrategy {
  process(amount: number): void {
    console.log("Processing Visa payment:", amount);
  }
}

class PayPalPayment implements PaymentStrategy {
  process(amount: number): void {
    console.log("Processing PayPal payment:", amount);
  }
}

class ApplePayPayment implements PaymentStrategy {
  process(amount: number): void {
    console.log("Processing ApplePay payment:", amount);
  }
}

class PaymentProcessor {
  process(paymentStrategy: PaymentStrategy, amount: number): void {
    paymentStrategy.process(amount);
  }
}