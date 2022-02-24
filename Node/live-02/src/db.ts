import { Pool } from 'pg';

const connectionString  = 'postgres://frgqiijc:KeyXhveUjawXO7eCBKN6gh759RUHn50f@kesavan.db.elephantsql.com/frgqiijc';

const db = new Pool({ connectionString });

export default db;