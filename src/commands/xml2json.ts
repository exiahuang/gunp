import { Command, flags } from '@oclif/command';
import { xml2json } from '../core/util';

export default class Xml2Json extends Command {
  static description = 'xml to json';

  static examples = [
    `$ gunp xml2json -f ~/PathOfXmlFile.xml
`,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-f, --file=VALUE)
    file: flags.string({
      char: 'f',
      description: 'xml file path',
      required: true,
    }),
    // flag with a value (-e, --encoding=VALUE)
    encoding: flags.string({
      char: 'e',
      description: 'encoding',
      default: 'utf-8',
    }),
  };

  async run() {
    const { flags } = this.parse(Xml2Json);

    if (flags.file) {
      const res = await xml2json(flags.file, flags.encoding);
      console.log(res);
    }
  }
}
