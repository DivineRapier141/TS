// Є клас, який читає дані з файлу, форматує їх і виводить на екран.
// Розбий обов’язки на три класи: читання, форматування, вивід.
// ❌ Неправильна реалізація — один клас відповідає за всі три етапи
// class FileProcessorBad {
//   processFile(filePath: string) {
//     const data = this.readFile(filePath);
//     const formatted = this.formatData(data);
//     this.printData(formatted);
//   }

//   private readFile(path: string): string {
//     console.log(`Reading file: ${path}`);
//     return "raw data from file";
//   }

//   private formatData(data: string): string {
//     console.log("Formatting data...");
//     return data.toUpperCase();
//   }

//   private printData(data: string) {
//     console.log("Printing formatted data:\n", data);
//   }
// }


class FReader {
  read(path: string): string {
    console.log(`Reading file: ${path}`);
    return "raw data from file";
  }
}

class DataFormatter {
  format(data: string): string {
    console.log("Formatting data...");
    return data.toUpperCase();
  }
}

class DataPrinter {
  print(data: string): void {
    console.log("Printing formatted data:\n", data);
  }
}

class FileProcessor {
  constructor(private reader: FReader, private formatter: DataFormatter, private printer: DataPrinter) {}

  processFile(filePath: string): void {
    const data = this.reader.read(filePath);
    const formatted = this.formatter.format(data);
    this.printer.print(formatted);
  }
}