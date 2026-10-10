function getSeasonInfo(month: number): number;
function getSeasonInfo(month: string): string;
function getSeasonInfo(month: number | string): number | string {
  if (typeof month === "number") {
    if (month === 12 || month === 1 || month === 2) return 1;
    if (month === 3 || month === 4 || month === 5) return 2;
    if (month === 6 || month === 7 || month === 8) return 3;
    if (month === 9 || month === 10 || month === 11) return 4;
    throw new Error("Неправильний номер місяця");
  } else {
    month = month.toLowerCase();
    if (month === "грудень" || month === "січень" || month === "лютий") return "Зима";
    if (month === "березень" || month === "квітень" || month === "травень") return "Весна";
    if (month === "червень" || month === "липень" || month === "серпень") return "Літо";
    if (month === "вересень" || month === "жовтень" || month === "листопад") return "Осінь";
    throw new Error("Неправильна назва місяця");
  }
}

console.log(getSeasonInfo(7));
console.log(getSeasonInfo("жовтень"));