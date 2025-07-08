import React, { useEffect, useState } from 'react';

function Steps() {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const data = [
            { id: 1, title: 'Leia as regras', description: 'É importante que você compreenda todas as instruções antes de prosseguir.', url: '#agreement' },
            { id: 2, title: 'Preencha o formulário', description: 'Insira suas informações corretamente para continuar.', url: '#' },
            { id: 3, title: 'Confirme sua inscrição', description: 'Use a chave informada para efetuar o pagamento.', url: '#' },
        ];
        setSteps(data);
    }, []);

    return (
        <div className='container'>
            <div className='row g-3'>
                {steps.map(step => (
                    <div className='mouseEffect col-12 col-md' key={step.id}>
                        <div className="card text-bg-dark shadow h-100">
                            <div className="card-header d-flex justify-content-between">
                                <h3>{step.title}</h3>
                                <h2 className='spaceMono text-end text-danger'>{step.id}</h2>
                            </div>
                            <a href={step.url}><div className="card-body">
                                <p className="card-text">{step.description}</p>
                            </div></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Steps;