// Є клас UserManager, який одночасно перевіряє валідність email і зберігає користувачів у базу.
// Виділи перевірку в окремий клас-валідатор.
// ❌ Неправильна реалізація — перевірка email і збереження у базу в одному класі
// class UserManagerBad {
//   saveUser(email: string) {
//     if (!email.includes("@") || !email.includes(".")) {
//       console.log("Invalid email format!");
//       return;
//     }
//     console.log(`Saving user with email: ${email} to database...`);
//   }
// }


class EmailValidator {
  isValid(email: string): boolean {
    return email.includes("@") && email.includes(".");
  }
}

class UserValid {
  save(email: string): void {
    console.log(`Saving user with email: ${email} to database...`);
  }
}

class UserManager {
  constructor(private validator: EmailValidator, private repository: UserValid) {}

  saveUser(email: string): void {
    if (!this.validator.isValid(email)) {
      console.log("Invalid email format!");
      return;
    }
    this.repository.save(email);
  }
}