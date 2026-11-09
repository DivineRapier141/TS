// Базовий клас Account має метод withdraw().
// Для типу SavingsAccount потрібно обмеження (не можна перевищувати ліміт).
// Як зробити, щоб при використанні Account замість SavingsAccount програма не ламалася?

/*
class AccountBad {
  balance: number = 1000;
  withdraw(amount: number) { this.balance -= amount; }
}
class SavingsAccountBad extends AccountBad {
  withdraw(amount: number) {
    if (amount > this.balance) throw new Error("Not enough funds"); // ❌ зміна очікуваної поведінки
    this.balance -= amount;
  }
}
*/



class Account {
  constructor(protected balance: number = 1000) {}

  getBalance(): number {
    return this.balance;
  }

  canWithdraw(amount: number): boolean {
    return amount <= this.balance;
  }

  withdraw(amount: number): boolean {
    if (!this.canWithdraw(amount)) {
      return false;
    }
    this.balance -= amount;
    return true;
  }
}

class SavingsAccount extends Account {
  private minBalance: number = 100;

  canWithdraw(amount: number): boolean {
    return this.balance - amount >= this.minBalance;
  }
}