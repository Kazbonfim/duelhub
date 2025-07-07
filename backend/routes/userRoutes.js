import { listUsers, addUser } from '../controller/userController.js';

async function userRoutes(app, opts) {
  app.get('/users', listUsers);
  app.post('/users', addUser);
}

export default userRoutes;