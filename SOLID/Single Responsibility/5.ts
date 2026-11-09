// Клас ReportGenerator збирає дані, форматує у PDF і відправляє поштою.
// Виділи окремо модуль збору, модуль форматування і модуль надсилання.
// ❌ Неправильна реалізація — один клас робить усе одразу
// class ReportGeneratorBad {
//   generateAndSendReport() {
//     const data = this.collectData();
//     const pdf = this.formatToPDF(data);
//     this.sendByEmail(pdf);
//   }

//   private collectData(): string {
//     console.log("Collecting report data...");
//     return "sales data";
//   }

//   private formatToPDF(data: string): string {
//     console.log("Formatting to PDF...");
//     return `PDF(${data})`;
//   }

//   private sendByEmail(report: string) {
//     console.log("Sending report via email:", report);
//   }
// }



class ReportDataCollector {
  collectData(): string {
    console.log("Collecting report data...");
    return "sales data";
  }
}

class PdfReportFormatter {
  formatToPDF(data: string): string {
    console.log("Formatting to PDF...");
    return `PDF(${data})`;
  }
}

class EmailReportSender {
  sendByEmail(report: string): void {
    console.log("Sending report via email:", report);
  }
}

class ReportGenerator {
  constructor(
    private collector: ReportDataCollector,
    private formatter: PdfReportFormatter,
    private sender: EmailReportSender
  ) {}

  generateAndSendReport(): void {
    const data = this.collector.collectData();
    const pdf = this.formatter.formatToPDF(data);
    this.sender.sendByEmail(pdf);
  }
}