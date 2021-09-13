import { MongoClient } from "mongodb";
import { env } from "./enviroment";

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  try {
    // Connect the client to the server
    await client.connect();
    await listDatabases(client);
    console.log("Connected successfully to server");
  } finally {
    // make sure that the client will close when finishing
    await client.close();
  }
};

const listDatabases = async (client) => {
  const databaseList = await client.db().admin().listDatabases();
  databaseList.databases.forEach((db) => console.log(` - ${db.name}`));
};
