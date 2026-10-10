var Award;
(function (Award) {
    Award["Gold"] = "\u0417\u043E\u043B\u043E\u0442\u0430 \u043C\u0435\u0434\u0430\u043B\u044C";
    Award["Silver"] = "\u0421\u0440\u0456\u0431\u043D\u0430 \u043C\u0435\u0434\u0430\u043B\u044C";
    Award["Bronze"] = "\u0411\u0440\u043E\u043D\u0437\u043E\u0432\u0430 \u043C\u0435\u0434\u0430\u043B\u044C";
    Award["Diploma"] = "\u0413\u0440\u0430\u043C\u043E\u0442\u0430";
})(Award || (Award = {}));
const allAwards = [Award.Gold, Award.Silver, Award.Bronze, Award.Diploma];
const awards = [];
for (let i = 0; i < 15; i++) {
    const index = Math.floor(Math.random() * allAwards.length);
    awards.push(allAwards[index]);
}
console.log(awards);
let gold = 0;
let silver = 0;
let bronze = 0;
let diploma = 0;
for (let i = 0; i < awards.length; i++) {
    const award = awards[i];
    switch (award) {
        case Award.Gold:
            gold++;
            break;
        case Award.Silver:
            silver++;
            break;
        case Award.Bronze:
            bronze++;
            break;
        case Award.Diploma:
            diploma++;
            break;
        default:
            const unknown = award;
            throw new Error("Невідома нагорода: " + unknown);
    }
}
console.log("Золотих медалей:", gold);
console.log("Срібних медалей:", silver);
console.log("Бронзових медалей:", bronze);
console.log("Грамот:", diploma);
export {};
//# sourceMappingURL=task7.js.map