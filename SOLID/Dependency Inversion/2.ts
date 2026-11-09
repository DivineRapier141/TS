// NotificationService напряму створює EmailSender і SMSSender.

/*
class EmailSenderBad { send(msg: string) { console.log("Email:", msg); } }
class SMSSenderBad { send(msg: string) { console.log("SMS:", msg); } }
class NotificationServiceBad {
  sendNotification(msg: string, type: string) {
    if (type === "email") new EmailSenderBad().send(msg);
    else if (type === "sms") new SMSSenderBad().send(msg);
  }
}
*/



interface MessageSender {
  send(msg: string): void;
}

class EmailSender implements MessageSender {
  send(msg: string): void {
    console.log("Email:", msg);
  }
}

class SMSSender implements MessageSender {
  send(msg: string): void {
    console.log("SMS:", msg);
  }
}

class PushSender implements MessageSender {
  send(msg: string): void {
    console.log("Push:", msg);
  }
}

class NotificationService {
  constructor(private sender: MessageSender) {}

  sendNotification(msg: string): void {
    this.sender.send(msg);
  }
}