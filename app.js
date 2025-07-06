import dotenv from 'dotenv';
dotenv.config();

import app from './backend/index.js';

const PORT = process.env.PORT || 8080;

app.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando tranquilo, porta: ${address}`);
});
