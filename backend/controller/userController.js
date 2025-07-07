import * as userModel from '../models/userModel.js';

export function listUsers(req, reply) {
  const users = userModel.getAllUsers();
  reply.send(users);
}

export function addUser(req, reply) {
  const result = userModel.createUser(req.body);
  reply.code(201).send({ id: result.lastInsertRowid });
}