import {
    readRecords,
    createRecord,
    updateRecord,
    deleteRecord
} from '../services/registerService.js';

export default async function registerRoutes(fastify, options) {
    // GET /api/participants
    fastify.get('/participants', async (request, reply) => {
        try {
            const data = await readRecords(10);
            return data;
        } catch (err) {
            reply.status(500).send({ error: 'Erro ao ler participantes' });
        }
    });

    // POST /api/participants
    fastify.post('/participants', async (request, reply) => {
        try {
            const result = await createRecord(request.body);
            reply.code(201).send(result);
        } catch (err) {
            reply.status(500).send({ error: 'Erro ao criar participante' });
        }
    });

    // PUT /api/participants/:id
    fastify.put('/participants/:id', async (request, reply) => {
        try {
            const result = await updateRecord(request.params.id, request.body);
            reply.send(result);
        } catch (err) {
            reply.status(500).send({ error: 'Erro ao atualizar participante' });
        }
    });

    // DELETE /api/participants/:id
    fastify.delete('/participants/:id', async (request, reply) => {
        try {
            const result = await deleteRecord(request.params.id);
            reply.send(result);
        } catch (err) {
            reply.status(500).send({ error: 'Erro ao deletar participante' });
        }
    });
}
