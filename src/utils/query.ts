import client from '../database';

const query = async (query: string, values?: (number | string)[]) => {
  try {
    const conn = await client.connect();
    const data = await conn.query(query, values);
    conn.release();
    return data.rows;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export { query };
