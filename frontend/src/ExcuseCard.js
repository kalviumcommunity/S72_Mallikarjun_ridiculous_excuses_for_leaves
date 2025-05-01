// src/components/ExcuseCard.js

import React from "react";

const ExcuseCard = ({ excuse }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}>
            <h3>Excuse:</h3>
            <p>{excuse}</p>
        </div>
    );
};

export default ExcuseCard;
