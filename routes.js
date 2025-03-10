const createHandler = (req, res) => {
    const { entity } = req.body;
    // Logic to add the entity to the data store would go here
    res.status(201).send({ message: 'Entity created', entity });
};

app.post('/create', createHandler);

app.get('/read', readHandler);
app.put('/update', updateHandler);
app.delete('/delete', deleteHandler);
