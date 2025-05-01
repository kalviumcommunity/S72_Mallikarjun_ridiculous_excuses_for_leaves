// src/App.js

import React from "react";
import ExcuseCard from "./components/ExcuseCard";

const App = () => {
    const sampleExcuses = [
        "My pet goldfish is getting married.",
        "I accidentally traveled to another dimension.",
        "Aliens abducted me, but they’ll bring me back tomorrow."
    ];

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h1>Ridiculous Excuses for Leaves</h1>
            {sampleExcuses.map((excuse, index) => (
                <ExcuseCard key={index} excuse={excuse} />
            ))}
        </div>
    );
};

export default App;
