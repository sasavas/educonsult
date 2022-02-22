import { MongoClient } from "mongodb";
import secrets from "../secrets";

const mongoUser =
  process.env.NODE_ENV === "development"
    ? secrets.Mongodb.user
    : process.env.MONGODB_USER;
const mongoPasswd =
  process.env.NODE_ENV === "development"
    ? secrets.Mongodb.password
    : process.env.MONGODB_PASSWD;

const uri = `mongodb+srv://${mongoUser}:${mongoPasswd}@main.fzy7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("universities");
  // perform actions on the collection object
  client.close();
});
