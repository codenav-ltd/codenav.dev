import mysql, { Pool } from 'mysql2/promise';
import config from './config';

let pool: Pool | null = null;

export const initializeDatabase = async (): Promise<Pool> => {
  try {
    pool = mysql.createPool({
      host: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      connectionLimit: config.database.connectionLimit,
      waitForConnections: config.database.waitForConnections,
      queueLimit: config.database.queueLimit
    });

    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully');
    console.log(`📍 Connected to: ${config.database.host}:${config.database.port}/${config.database.database}`);
    connection.release();
    
    return pool;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Database connection failed:', errorMessage);
    throw error;
  }
};

export const getPool = (): Pool => {
  if (!pool) {
    throw new Error('Database pool not initialized. Call initializeDatabase first.');
  }
  return pool;
};

export const closeDatabase = async (): Promise<void> => {
  if (pool) {
    await pool.end();
    console.log('📤 Database connection closed');
  }
};