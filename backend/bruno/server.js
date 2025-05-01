// eslint-disable-next-line no-undef
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';

const app = express();
app.use(bodyParser.json());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// AddExcuseForm.js
import React, { useState } from 'react';

const AddExcuseForm = ({ onAddExcuse }) => {
    const [excuse, setExcuse] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddExcuse({ excuse, reason });
        setExcuse('');
        setReason('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Excuse:
                <input type="text" value={excuse} onChange={(e) => setExcuse(e.target.value)} />
            </label>
            <label>
                Reason:
                <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
            </label>
            <button type="submit">Add Excuse</button>
        </form>
    );
};

export default AddExcuseForm;
