const settings = {
    wifi: "enabled",
    bluetooth: "disabled",
    sound: "enabled",
    location: "disabled",
    nightMode: "enabled",
};
console.log("Увімкнені налаштування:");
for (const key in settings) {
    if (settings[key] === "enabled") {
        console.log(key);
    }
}
export {};
//# sourceMappingURL=task5.js.map