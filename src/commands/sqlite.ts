import { Command, flags } from '@oclif/command';
import { doQuery } from '../core/sqlite';

export default class Sqlite extends Command {
  static description = 'sqlite query';

  static examples = [
    `$ gunp sqlite "select * from user"
`,
  ];

  static args = [{ name: 'sql' }];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async run() {
    const { args } = this.parse(Sqlite);
    if (!process.env.SQLITE_URI) {
      this.log('please set SQLITE_URI variable');
    }

    if (args.sql && process.env.SQLITE_URI) {
      await doQuery({
        uri: process.env.SQLITE_URI,
      })(args.sql);
    }
  }
}

