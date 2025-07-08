import db from '../db/sqliteService.js';

export function getAllUsers() {
  return db.prepare('SELECT * FROM users').all();
}

export function createUser(user) {
  const stmt = db.prepare(`
    INSERT INTO users (userName, email, phone, deckName, tier, registerDate, tournamentId, status, score, finalScore, hasPaid)
    VALUES (@userName, @email, @phone, @deckName, @tier, @registerDate, @tournamentId, @status, @score, @finalScore, @hasPaid)
  `);
  return stmt.run(user);
}