import Fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './app.user.routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = Fastify({ logger: true });


await app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflight: true,
});

// Frontend
app.register(fastifyStatic, {
    root: path.join(__dirname, '../frontend/build'),
    wildcard: false,
    index: 'index.html',
});

// Backend
app.register(userRoutes, { prefix: '/api' });

// Rotas básicas de teste
app.get('/teste', (req, reply) => {
    reply.send('Servidor rodando!');
});


export default app;
