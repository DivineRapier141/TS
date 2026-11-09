// Клас DiscountManager має кілька умов для різних клієнтів (нові, постійні, VIP).
// Реорганізуй код через інтерфейс “стратегії знижок”, щоб додати новий тип знижки без зміни базового класу.

/*
class DiscountManagerBad {
  getPrice(customerType: string, price: number): number {
    if (customerType === "new") {
      return price * 0.95;
    } else if (customerType === "regular") {
      return price * 0.9;
    } else if (customerType === "vip") {
      return price * 0.8;
    } else {
      return price;
    }
  }
}
*/



interface DiscountStrategy {
  calculatePrice(price: number): number;
}

class NewCustomerDiscount implements DiscountStrategy {
  calculatePrice(price: number): number {
    return price * 0.95;
  }
}

class RegularCustomerDiscount implements DiscountStrategy {
  calculatePrice(price: number): number {
    return price * 0.9;
  }
}

class VipCustomerDiscount implements DiscountStrategy {
  calculatePrice(price: number): number {
    return price * 0.8;
  }
}

class NoDiscount implements DiscountStrategy {
  calculatePrice(price: number): number {
    return price;
  }
}

class DiscountManager {
  getPrice(strategy: DiscountStrategy, price: number): number {
    return strategy.calculatePrice(price);
  }
}