import sheetdb from 'sheetdb-node';
import { randomUUID } from 'crypto';

const URL = process.env.SPREAD_URL || 'fzhp5jfblfaih';

// Criar um novo registro [modelo]
// const newRecord = {
//     id: 1,
//     userName: 'kazbonfim',
//     email: 'kazuo@example.com',
//     deckName: 'Dark Magician Control',
//     tier: 'Beginner',
//     registerDate: '2025-07-06',
//     tournamentId: 101,
//     status: 'active',
//     score: 0,
//     finalScore: 0,
//     hasPaid: true,
// };

const config = { address: URL };
const client = sheetdb(config);

// Ler registros, com limite opcional
export async function readRecords(limit = 10) {
    try {
        const data = await client.read({ limit });
        return data;
    } catch (err) {
        console.error('Erro ao ler:', err);
        throw err;
    }
}

// Criar registro (objeto com os campos)
export async function createRecord(record) {
    try {

        if(!record.id){
            record.id = randomUUID().replace(/-/g, '').slice(0, 16); // Isso vai gerar um ID único
        }

        const data = await client.create(record);
        return data;
    } catch (err) {
        console.error('Erro ao criar:', err);
        throw err;
    }
}

// Atualizar registro por id (id e objeto com campos atualizados)
export async function updateRecord(id, updates) {
    try {
        const data = await client.update(id, updates);
        return data;
    } catch (err) {
        console.error('Erro ao atualizar:', err);
        throw err;
    }
}

// Deletar registro por id
export async function deleteRecord(id) {
    try {
        const data = await client.delete(id);
        return data;
    } catch (err) {
        console.error('Erro ao deletar:', err);
        throw err;
    }
}
