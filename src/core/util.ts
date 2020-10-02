import * as fs from 'fs';
import * as xml2js from 'xml2js';

export const xml2json = async (filePath: string, encoding = 'utf-8') => {
  const parser = new xml2js.Parser();
  const xmlContent = fs.readFileSync(filePath, { encoding });
  const result = await parser.parseStringPromise(xmlContent);
  return JSON.stringify(result, null, 2);
};
