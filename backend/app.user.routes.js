import { listUsers, addUser } from './app.user.controller.js';

async function userRoutes(app, opts) {
  app.get('/users', listUsers);
  app.post('/users', addUser);
}

export default userRoutes;