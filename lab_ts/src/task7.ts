enum Award {
  Gold = "Золота медаль",
  Silver = "Срібна медаль",
  Bronze = "Бронзова медаль",
  Diploma = "Грамота",
}

const allAwards: Award[] = [Award.Gold, Award.Silver, Award.Bronze, Award.Diploma];

const awards: Award[] = [];
for (let i: number = 0; i < 15; i++) {
  const index: number = Math.floor(Math.random() * allAwards.length);
  awards.push(allAwards[index]);
}

console.log(awards);

let gold: number = 0;
let silver: number = 0;
let bronze: number = 0;
let diploma: number = 0;

for (let i: number = 0; i < awards.length; i++) {
  const award: Award = awards[i];

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
      const unknown: never = award;
      throw new Error("Невідома нагорода: " + unknown);
  }
}

console.log("Золотих медалей:", gold);
console.log("Срібних медалей:", silver);
console.log("Бронзових медалей:", bronze);
console.log("Грамот:", diploma);