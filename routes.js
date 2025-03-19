const createHandler = (req, res) => {
    const { entity } = req.body;
    // Logic to add the entity to the data store would go here
    res.status(201).send({ message: 'Entity created', entity });
};

app.post('/create', createHandler);

const readHandler = (req, res) => {
    // Sample data for demonstration purposes
    const entities = [
        { excuse: "I was late because of traffic." },
        { excuse: "I forgot my homework." },
        { excuse: "I had a family emergency." }
    ];
    res.status(200).send(entities);
};


app.get('/read', readHandler);

app.put('/update', updateHandler);
app.delete('/delete', deleteHandler);
