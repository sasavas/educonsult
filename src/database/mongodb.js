import { MongoClient } from "mongodb";
import secrets from "../secrets";

const uri = `mongodb+srv://appicient:${secrets.Mongodb.password}@main.fzy7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("universities");
  // perform actions on the collection object
  client.close();
});
