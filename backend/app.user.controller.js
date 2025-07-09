import * as userModel from './app.user.model.js';

export function listUsers(req, reply) {
  const users = userModel.getAllUsers();
  reply.send(users);
}

export function addUser(req, reply) {
  const { userName, email, phone, password } = req.body;

  const userData = {
    userName,
    email,
    phone,
    password,
    deckName: null,
    tier: 'Beginner',
    registerDate: new Date().toISOString(),
    tournamentId: null,
    status: 'Active',
    score: 0,
    finalScore: 0,
    hasPaid: 0,
  };

  const result = userModel.createUser(userData);
  reply.code(201).send({ id: result.lastInsertRowid });
}
