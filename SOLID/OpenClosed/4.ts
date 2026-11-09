// Компонент MessageDisplay у методі render() має if-умови для типів повідомлень (success, error, warning).
// Побудуй систему, де кожен тип повідомлення має власний клас.

/*
class MessageDisplayBad {
  render(type: string, text: string) {
    if (type === "success") {
      console.log("✅ Success:", text);
    } else if (type === "error") {
      console.log("❌ Error:", text);
    } else if (type === "warning") {
      console.log("⚠️ Warning:", text);
    } else {
      console.log("ℹ️ Info:", text);
    }
  }
}
*/



interface MessageRender {
  render(text: string): void;
}

class SuccessMessage implements MessageRender {
  render(text: string): void {
    console.log("✅ Success:", text);
  }
}

class ErrorMessage implements MessageRender {
  render(text: string): void {
    console.log("❌ Error:", text);
  }
}

class WarningMessage implements MessageRender {
  render(text: string): void {
    console.log("⚠️ Warning:", text);
  }
}

class InfoMessage implements MessageRender {
  render(text: string): void {
    console.log("ℹ️ Info:", text);
  }
}

class MessageDisplay {
  render(renderer: MessageRender, text: string): void {
    renderer.render(text);
  }
}