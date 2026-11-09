// Клас Checkout напряму залежить від PayPalPayment.

/*
class PayPalPaymentBad {
  pay(amount: number) { console.log("PayPal paid:", amount); }
}
class CheckoutBad {
  private processor = new PayPalPaymentBad(); // ❌ жорстка залежність
  process(amount: number) { this.processor.pay(amount); }
}
*/



interface PaymentProcessor {
  pay(amount: number): void;
}

class PayPalPayment implements PaymentProcessor {
  pay(amount: number): void {
    console.log("PayPal paid:", amount);
  }
}

class StripePayment implements PaymentProcessor {
  pay(amount: number): void {
    console.log("Stripe paid:", amount);
  }
}

class Checkout {
  constructor(private processor: PaymentProcessor) {}

  process(amount: number): void {
    this.processor.pay(amount);
  }
}