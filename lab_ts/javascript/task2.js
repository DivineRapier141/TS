function getLast(value) {
    if (typeof value === "number") {
        let last = value % 10;
        if (last < 0) {
            last = -last;
        }
        return last;
    }
    else {
        return value[value.length - 1];
    }
}
console.log(getLast(12345));
console.log(getLast("12345"));
console.log(getLast("abc"));
export {};
//# sourceMappingURL=task2.js.map