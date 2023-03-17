import mysql, {Connection} from "mysql";

export default class SQL {
    connection(): Connection {
       return mysql.createConnection({
           host: 'localhost',
           user: 'root',
           password: '',
           database: 'crypto-bot'
       });
    }

    generateTables(): void {
        let db = this.connection();

        // create tables

        db.end();
    }
}