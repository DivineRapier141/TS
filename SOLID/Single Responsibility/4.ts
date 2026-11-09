// Клас NotificationService одночасно генерує повідомлення, надсилає його й записує в історію.
// Розділи ці частини, щоб кожен клас відповідав лише за один етап.
// ❌ Неправильна реалізація — усі три обов’язки в одному класі
// class NotificationServiceBad {
//   sendNotification(user: string, message: string) {
//     const fullMessage = this.createMessage(user, message);
//     this.send(fullMessage);
//     this.saveHistory(fullMessage);
//   }

//   private createMessage(user: string, msg: string): string {
//     return `To ${user}: ${msg}`;
//   }

//   private send(msg: string) {
//     console.log("Sending:", msg);
//   }

//   private saveHistory(msg: string) {
//     console.log("Saving to history:", msg);
//   }
// }


class MessageBuilder {
  createMessage(user: string, msg: string): string {
    return `To ${user}: ${msg}`;
  }
}

class NotificationSender {
  send(msg: string): void {
    console.log("Sending:", msg);
  }
}

class NotificationHistory {
  saveHistory(msg: string): void {
    console.log("Saving to history:", msg);
  }
}

class NotificationService {
  constructor(
    private builder: MessageBuilder,
    private sender: NotificationSender,
    private history: NotificationHistory
  ) {}

  sendNotification(user: string, message: string): void {
    const fullMessage = this.builder.createMessage(user, message);
    this.sender.send(fullMessage);
    this.history.saveHistory(fullMessage);
  }
}