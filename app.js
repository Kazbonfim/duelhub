import dotenv from 'dotenv'
dotenv.config();

// https://fastify.dev/docs/latest/Guides/Getting-Started/
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'
import cors from '@fastify/cors'


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = Fastify({
  logger: true,
});
const PORT = process.env.PORT || 8080;

await app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflight: true,
})

app.register(fastifyStatic, {
    root: path.join(__dirname, 'build'),
    wildcard: false,
    index: 'index.html',
})

// Rotas
app.get('/teste', function (request, reply) {
  reply.send('Servidor rodando!')
})

// Rodando o servidor!
app.listen({ port: PORT, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log('Servidor rodando tranquilo, porta: ' + address)
})