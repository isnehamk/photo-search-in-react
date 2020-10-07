const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require('mongodb').MongoClient;

const port = 3000;
const url = 'mongodb://localhost:27017';



const dbName = 'messageBoard';

app.use(bodyParser.text());

app.get('/', (req, res) => res.send("hello"));

app.post('/api/message', (req, res) => {
    console.log(req.body);
    res.status(200)
}
)

MongoClient.connect(url, function (client,err) {
    if (err) {
        
        return console.log("------Connection Error-------", err);
    }
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    
    db.collection('messages').insertOne({'msg':test});

    client.close();
});

app.listen(port, () => console.log("Running at port", port));