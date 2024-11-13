const { MongoClient } = require('mongodb');

const uri = "mongodb://luantrindade:37224468Lu@n@nory-challenge-shard-00-00.kpj6s.mongodb.net:27017,nory-challenge-shard-00-01.kpj6s.mongodb.net:27017,nory-challenge-shard-00-02.kpj6s.mongodb.net:27017/?ssl=false&replicaSet=atlas-4xgwuu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=nory-challenge";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run();