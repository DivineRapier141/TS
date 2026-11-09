// Клас UserManager напряму використовує MySQLService.

/*
class MySQLServiceBad {
  save(data: string) { console.log("Saving to MySQL:", data); }
}
class UserManagerBad {
  private db = new MySQLServiceBad(); // ❌ жорстка залежність
  addUser(name: string) { this.db.save(name); }
}
*/



interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string): void {
    console.log("Saving to MySQL:", data);
  }
}

class PostgresqlDatabase implements Database {
  save(data: string): void {
    console.log("Saving to PostgreSQL:", data);
  }
}

class UserManager {
  constructor(private db: Database) {}

  addUser(name: string): void {
    this.db.save(name);
  }
}