import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, './database.sqlite');

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    deckName TEXT,
    tier TEXT,
    registerDate TEXT,
    tournamentId INTEGER,
    status TEXT,
    score INTEGER DEFAULT 0,
    finalScore INTEGER DEFAULT 0,
    hasPaid INTEGER DEFAULT 0
  );
`);

export default db;