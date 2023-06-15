const express = require("express"),
       app = express(),
       port = process.env.PORT || 8080,
       cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs").promises;
const { MongoClient } = require('mongodb');

const useMongo = !!process.env.USE_MONGO
let collection;

if (useMongo) {
    console.log("connecting to mongo")
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'to-do-list';
    client.connect().then(() => {
        collection = client.db(dbName).collection('documents')
    })
}

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (request, response) => {
    response.send({ message: "Connected to Backend server!" });
});

//add new item to json file
app.post("/add/item", addItem)

async function addItem (request, response) {
    try {
        // Converting Javascript object (Task Item) to a JSON string
        const id = request.body.jsonObject.id
        const task = request.body.jsonObject.task
        const curDate = request.body.jsonObject.currentDate
        const dueDate = request.body.jsonObject.dueDate
        const newTask = {
          ID: id,
          Task: task,
          Current_date: curDate,
          Due_date: dueDate
        }

        if (useMongo) {
            await collection.insertMany([newTask]);
            console.log('Successfully wrote to mongo')
        } else {
            const data = await fs.readFile("database.json");
            const json = JSON.parse(data);
            json.push(newTask);
            await fs.writeFile("database.json", JSON.stringify(json))
            console.log('Successfully wrote to file') 
        }
        response.sendStatus(200)
    } catch (err) {
        console.log("error: ", err)
        response.sendStatus(500)
    }
}

//** week 6, get all items from the json database*/
app.get("/get/items", getItems)
async function getItems (request, response) {
    //begin here
};

//** week 6, search items service */
app.get("/get/searchitem", searchItems) 
async function searchItems (request, response) {
    //begin here
};
