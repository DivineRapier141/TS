// Клас Payment має метод refund().
// Деякі підкласи (GiftCardPayment) не підтримують повернення коштів і викидають помилки.
// Перепроєктуй ієрархію, щоб уникнути цього.

/*
class PaymentBad {
  refund() { console.log("Refund completed"); }
}
class GiftCardPaymentBad extends PaymentBad {
  refund() { throw new Error("Gift cards cannot be refunded!"); } // ❌
}
*/




interface Payment {
  pay(amount: number): void;
}

interface RefundablePayment extends Payment {
  refund(amount: number): void;
}

class CreditCardPayment implements RefundablePayment {
  pay(amount: number): void {
    console.log(`Paid ${amount} via Credit Card`);
  }

  refund(amount: number): void {
    console.log(`Refunded ${amount} to Credit Card`);
  }
}

class GiftCardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} via Gift Card`);
  }
}