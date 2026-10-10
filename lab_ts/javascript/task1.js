function showError(message) {
    throw new Error(message);
}
function getSeason(month) {
    if (month < 1 || month > 12) {
        showError("Такого місяця не існує");
    }
    if (month === 12) {
        return "Зима";
    }
    else if (month === 3) {
        return "Весна";
    }
    else if (month === 6) {
        return "Літо";
    }
    else if (month === 9) {
        return "Осінь";
    }
    else {
        showError("Це не перший місяць пори року");
    }
}
console.log(getSeason(3));
console.log(getSeason(12));
console.log(getSeason(5));
console.log(getSeason(15));
export {};
//# sourceMappingURL=task1.js.map