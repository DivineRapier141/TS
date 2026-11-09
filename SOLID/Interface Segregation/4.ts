// Інтерфейс Messenger має методи sendEmail(), sendSMS(), sendPush().

/*
interface MessengerBad {
  sendEmail(msg: string): void;
  sendSMS(msg: string): void;
  sendPush(msg: string): void;
}
class EmailMessengerBad implements MessengerBad {
  sendEmail(m: string) { console.log("Email:", m); }
  sendSMS(m: string) { throw new Error("Not supported"); } // ❌
  sendPush(m: string) { throw new Error("Not supported"); } // ❌
}
*/



interface IEmailSender {
  sendEmail(msg: string): void;
}

interface SmsSender {
  sendSMS(msg: string): void;
}

interface PushSender {
  sendPush(msg: string): void;
}

class EmailMessenger implements IEmailSender {
  sendEmail(msg: string): void {
    console.log("Email:", msg);
  }
}