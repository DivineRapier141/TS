// Клас TaxCalculator перевіряє тип компанії і рахує податки по-різному.
// Впровадь поліморфізм так, щоб нові види компаній можна було додавати окремо.

/*
class TaxCalculatorBad {
  calculate(companyType: string, amount: number) {
    if (companyType === "small") {
      return amount * 0.1;
    } else if (companyType === "corporation") {
      return amount * 0.2;
    } else if (companyType === "nonprofit") {
      return 0;
    } else {
      throw new Error("Unknown company type");
    }
  }
}
*/



interface TaxStrategy {
  calculate(amount: number): number;
}

class SmallCompanyTax implements TaxStrategy {
  calculate(amount: number): number {
    return amount * 0.1;
  }
}

class CorporationTax implements TaxStrategy {
  calculate(amount: number): number {
    return amount * 0.2;
  }
}

class NonProfitTax implements TaxStrategy {
  calculate(): number {
    return 0;
  }
}

class TaxCalculator {
  calculateTax(taxStrategy: TaxStrategy, amount: number): number {
    return taxStrategy.calculate(amount);
  }
}