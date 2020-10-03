import { Command, flags } from '@oclif/command';
import { doQuery, getConnection } from '../core/mysql';

export default class Mysql extends Command {
  static description = 'mysql query';

  static examples = [
    `$ gunp psql "select * from user"
`,
  ];

  static args = [{ name: 'sql' }];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async run() {
    const { args } = this.parse(Mysql);

    if (args.sql) {
      const conn = getConnection({
        user: process.env.MYSQL_USER,
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_PASSWORD,
        port: Number(process.env.MYSQL_PORT) || 5432,
      });
      await doQuery(conn)(args.sql);
      conn.end();
    }
  }
}
