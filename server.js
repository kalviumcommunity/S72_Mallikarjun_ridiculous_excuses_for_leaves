const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}


app.get('/', async (req, res) => {
    try {
        const dbStatus = client.isConnected() ? 'Connected' : 'Not Connected';
        res.send(`Database connection status: ${dbStatus}`);
    } catch (err) {
        res.status(500).send('Error checking database connection status');
    }
});


connectToDatabase();