// ExcusesPage.js
import React, { useState, useEffect } from 'react';
import AddExcuseForm from './AddExcuseForm';
import ExcuseList from './ExcuseList'; // Importing the new ExcuseList component


const ExcusesPage = () => {
    const [excuses, setExcuses] = useState([]);

    const handleAddExcuse = (excuse) => {
        setExcuses([...excuses, excuse]);
    };

    useEffect(() => {
        // Fetch initial list of excuses from the server
        // fetch('/api/excuses')
        //     .then(response => response.json())
        //     .then(data => setExcuses(data));
    }, []);

    return (
        <div>
            <h1>Ridiculous Excuses for Leaves</h1>
            <AddExcuseForm onAddExcuse={handleAddExcuse} />
            <ExcuseList /> {/* Rendering the ExcuseList component to display excuses */}

        </div>
    );
};

export default ExcusesPage;
