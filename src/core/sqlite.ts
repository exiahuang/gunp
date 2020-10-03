import * as sqlite3 from 'sqlite3';

export const doQuery = (config: { uri: string }) => async (sql: string) => {
  const db = new sqlite3.Database(config.uri);
  db.all(sql, function (_err, rows) {
    console.log(rows);
  });
  db.close();
};

