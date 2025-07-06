import React from 'react';
import Information from './Information';

function Forms() {
    return (
        <div className="container mt-3">
            <hr />
            <div className="row">
                <div className="col-12 col-md-4">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nomeCompleto" className="form-label">Nome completo</label>
                            <input type="text" className="form-control" id="nomeCompleto" placeholder="Yugi Moto"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="yugi@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contato" className="form-label">WhatsApp</label>
                            <input type="tel" className="form-control" id="contato" placeholder="(11) 91234-5678" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="arquivo" className="form-label">Envio de arquivo (.ydk)</label>
                            <input type="file" className="form-control" id="arquivo" accept=".ydk" />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>

                <div className="col-12 col-md-8 mt-3">
                    <Information />
                </div>
            </div>
            <hr className='' />
        </div>
    );
}

export default Forms;
