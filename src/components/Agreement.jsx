import React from 'react'

function Agreement() {
    return (
        <div className='container mt-3'>
            <div className='d-flex justify-content-center'>
                <h1 id='agreement' className='text-center mb-3'>Regras dos Torneios</h1>
                <i className="bi bi-file-earmark-text ms-1"></i>
            </div>
            <div className='shadow text-center border border-subtle-dark p-3 mb-5'>
                <p>1. Cada jogador deve realizar seu cadastro completo para participar, incluindo nome, email e deck utilizado.</p>
                <p>2. Apenas um cadastro por jogador é permitido para cada torneio.</p>
                <p>3. O limite máximo de participantes será definido para cada torneio e respeitado rigorosamente.</p>
                <p>4. O uso de decks deve respeitar as regras oficiais do Yu-Gi-Oh, sem cartas banidas ou restritas conforme lista vigente.</p>
                <p>5. A data e horário de inscrição são registrados automaticamente e serão usados para organizar as chaves e o andamento do torneio.</p>
                <p>6. Durante o torneio, os jogadores devem seguir o código de conduta, mantendo respeito e fair play em todas as partidas.</p>
                <p>7. Desclassificações podem ocorrer em caso de descumprimento das regras ou comportamento inadequado.</p>
                <p>8. Os resultados das partidas serão registrados para controle de pontos, vitórias e eliminações.</p>
                <p>9. A organização reserva-se o direito de alterar regras e formatar o torneio conforme necessidade, avisando previamente os participantes.</p>
                <p>10. Ao se inscrever, o jogador concorda com todas as regras estabelecidas para garantir um torneio justo e divertido para todos.</p>
            </div>
        </div>
    )
}

export default Agreement
