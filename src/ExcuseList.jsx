import React, { useEffect, useState } from 'react';
import ExcuseCard from './ExcuseCard';

const ExcuseList = () => {
    const [excuses, setExcuses] = useState([]);

    useEffect(() => {
        const fetchExcuses = async () => {
            const response = await fetch('/read');
            if (response.ok) {
                const data = await response.json();
                setExcuses(data);
            } else {
                console.error('Failed to fetch excuses');
            }
        };

        fetchExcuses();
    }, []);

    return (
        <div>
            {excuses.map((excuse, index) => (
                <ExcuseCard key={index} excuse={excuse.excuse} />
            ))}
        </div>
    );
};

export default ExcuseList;
