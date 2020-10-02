import { Command, flags } from '@oclif/command';
import { doQuery } from '../core/psql';

export default class Psql extends Command {
  static description = 'postgresql query';

  static examples = [
    `$ gunp psql "select * from user"
`,
  ];

  static args = [{ name: 'sql' }];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async run() {
    const { args } = this.parse(Psql);

    if (args.sql) {
      const res = await doQuery({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: Number(process.env.PGPORT) || 5432,
      })(args.sql);
      if (res.command === 'SELECT') {
        console.log(JSON.stringify(res.rows));
      } else {
        console.log(res);
      }
    }
  }
}
