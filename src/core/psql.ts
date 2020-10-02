import { Pool, PoolConfig } from 'node-postgres';

export const doQuery = (config?: PoolConfig) => async (sql: string) => {
  const pool = new Pool(config);
  const res = await pool.query(sql);
  await pool.end();
  return res;
};
