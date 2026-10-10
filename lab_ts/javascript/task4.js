const weekends = ["Субота", "Неділя"];
const holidays = ["Новий рік", "Різдво", "Великдень", "День Незалежності"];
const days = [];
for (let i = 0; i < 10; i++) {
    const type = Math.floor(Math.random() * 3);
    if (type === 0) {
        days.push(Math.floor(Math.random() * 5) + 1);
    }
    else if (type === 1) {
        const index = Math.floor(Math.random() * weekends.length);
        days.push(weekends[index]);
    }
    else {
        const index = Math.floor(Math.random() * holidays.length);
        days.push(holidays[index]);
    }
}
console.log(days);
let weekendCount = 0;
let holidayCount = 0;
for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (typeof day === "string") {
        if (weekends.includes(day)) {
            weekendCount++;
        }
        else if (holidays.includes(day)) {
            holidayCount++;
        }
    }
}
console.log("Вихідних:", weekendCount);
console.log("Святкових:", holidayCount);
if (weekendCount > holidayCount) {
    console.log("Вихідних більше");
}
else if (holidayCount > weekendCount) {
    console.log("Святкових більше");
}
else {
    console.log("Однаково");
}
export {};
//# sourceMappingURL=task4.js.map