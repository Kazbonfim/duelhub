import { randomUUID } from 'crypto';
import { readRecords, createRecord, updateRecord, deleteRecord } from '../services/registerService.js';

async function run() {
    // Ler
    const participantes = await readRecords(5);
    console.log(participantes);

    // Criar
    await createRecord({
        id: randomUUID().replace(/-/g, '').slice(0, 16),
        userName: 'novoUser',
        email: 'novo@example.com',
        deckName: 'Deck Novo',
        tier: 'Advanced',
        registerDate: '2025-07-07',
        tournamentId: 102,
        status: 'active',
        score: 0,
        finalScore: 0,
        hasPaid: true,
    });

    // Atualizar
    await updateRecord(3, { score: 10, hasPaid: true });

    // Deletar
    await deleteRecord(3);
}

run();
