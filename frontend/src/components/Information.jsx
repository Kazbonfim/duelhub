import React, { useEffect, useState } from 'react';

const Information = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = [
            {
                id: 1,
                userName: "kazbonfim",
                fullName: "Kazuo Bonfim",
                email: "kazuo@example.com",
                deckName: "Dark Magician Control",
                tier: "Beginner",
                registerDate: "2025-07-06T14:30:00Z",
                tournamentId: 101,
                status: "active",
                score: 0,
            },
            {
                id: 2,
                userName: "lunalightX",
                fullName: "Luna Silva",
                email: "luna@example.com",
                deckName: "Lunalight OTK",
                tier: "Intermediate",
                registerDate: "2025-07-06T15:00:00Z",
                tournamentId: 101,
                status: "active",
                score: 0,
            },
        ];
        setData(data);
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
            style={{ borderRadius: "0px", maxWidth: "560px", width: "100%" }}
        >
            <ul className="list-group list-group-flush">
                <li
                    className="list-group-item text-white d-flex align-items-center"
                    style={{ borderColor: "#282b30", backgroundColor: "#422773" }}
                >
                    Últimos participantes
                    <i className="bi bi-person ms-1"></i>
                </li>
                {data.slice(0, 8).map(({ id, userName, tier, registerDate }) => (
                    <li
                        className="mouseEffect d-flex justify-content-between list-group-item bg-dark text-white border-dark"
                        key={id}
                    >
                        <span>{userName}</span>
                        <span>{tier}</span>
                        <span>{formatDate(registerDate)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Information;
