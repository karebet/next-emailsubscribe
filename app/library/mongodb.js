// mongodb.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let clientPromise
if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}
const client = new MongoClient(uri, {
  
});
clientPromise = await client.connect();

export default clientPromise