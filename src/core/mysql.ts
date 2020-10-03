import * as mysql from 'mysql';

export const getConnection = (
  config: mysql.ConnectionConfig
): mysql.Connection => mysql.createConnection(config);

export const doQuery = (conn: mysql.Connection) => async (sql: string) => {
  const res = await conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });
  return res;
};
