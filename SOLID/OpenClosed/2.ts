// Клас Exporter вміє експортувати лише у JSON.
// Розроби архітектуру, щоб можна було легко додати експорт у CSV або XML без зміни коду Exporter.

/*
class ExporterBad {
  export(data: any, format: string) {
    if (format === "json") {
      console.log("Exporting to JSON:", JSON.stringify(data));
    } else if (format === "csv") {
      console.log("Exporting to CSV:", Object.values(data).join(","));
    } else {
      console.log("Unsupported format!");
    }
  }
}
*/


interface DataExporter {
  export(data: unknown): void;
}

class JsonExporter implements DataExporter {
  export(data: unknown): void {
    console.log("Exporting to JSON:", JSON.stringify(data));
  }
}

class CsvExporter implements DataExporter {
  export(data: Record<string, unknown>): void {
    console.log("Exporting to CSV:", Object.values(data).join(","));
  }
}

class XmlExporter implements DataExporter {
  export(data: unknown): void {
    console.log("Exporting to XML:", `<data>${JSON.stringify(data)}</data>`);
  }
}

class Exporter {
  exportData(exporter: DataExporter, data: unknown): void {
    exporter.export(data);
  }
}