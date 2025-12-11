import { MongoClient } from 'mongodb';
import fs from 'fs';

const uri = 'mongodb+srv://username:password@cluster0.mongodb.net/mydatabase';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    await collection.insertMany(data);

    console.log('Data inserted successfully!');
  } finally {
    await client.close();
  }
}

run().catch(console.error);
