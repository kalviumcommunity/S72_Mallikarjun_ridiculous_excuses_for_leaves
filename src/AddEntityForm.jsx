import React, { useState } from 'react';

const AddEntityForm = () => {
    const [entity, setEntity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ entity }),
        });
        if (response.ok) {
            // Handle successful addition (e.g., refresh the list or show a success message)
            setEntity('');
        } else {
            // Handle error
            console.error('Failed to add entity');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={entity}
                onChange={(e) => setEntity(e.target.value)}
                placeholder="Enter entity"
                required
            />
            <button type="submit">Add Entity</button>
        </form>
    );
};

export default AddEntityForm;
