import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Information = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get('/api/users')
                .then(res => setData(Array.isArray(res.data) ? res.data : []))
                .catch(() => setData([]));
        };

        fetchData();

        const interval = setInterval(fetchData, 20000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        if (isNaN(date)) return "00/00/00";
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(date);
    };

    return (
        <div
            className="spaceMono card bg-dark text-white shadow mx-auto"
            style={{ borderRadius: "20px", maxWidth: "560px", width: "100%" }}
        >
            <ul className="list-group list-group-flush">
                <li
                    className="list-group-item text-white d-flex align-items-center"
                    style={{ borderColor: "#282b30", backgroundColor: "#b03a2e", borderRadius: "0px" }}
                >
                    Últimos participantes
                    <i className="bi bi-person ms-1"></i>
                </li>
                <li
                    className="d-flex justify-content-between list-group-item text-white border-dark"
                    style={{ backgroundColor: "#ec7063", borderRadius: "0px" }}
                >
                    <span style={{ flex: 1, minWidth: 0 }} className="text-truncate pe-2">Nome</span>
                    <span style={{ width: "80px", textAlign: "center" }}>Tier</span>
                    <span style={{ width: "90px", textAlign: "right" }}>Inscrição</span>
                </li>
                {data.slice(0, 7).map(({ id, userName, tier, registerDate }) => (
                    <li
                        className="mouseEffect d-flex justify-content-between list-group-item bg-dark text-white border-dark"
                        key={id}
                    >
                        <span style={{ flex: 1, minWidth: 0 }} className="text-truncate pe-2">{userName}</span>
                        <span style={{ width: "80px", textAlign: "center" }}>{tier}</span>
                        <span style={{ width: "90px", textAlign: "right" }}>{formatDate(registerDate)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Information;
