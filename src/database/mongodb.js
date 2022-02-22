import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWD}@main.fzy7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("universities");
  // perform actions on the collection object
  client.close();
});
