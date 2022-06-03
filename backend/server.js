const express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
    res.send({ message: "Connected to Backend server!" });
  });

//add new item to json file
app.post("/add/item", addItem)

function addItem (request, response) {
    // Converting Javascript object (Task Item) to a JSON string
    let task = request.body.jsonObject.task
    let curDate = request.body.jsonObject.currentDate
    let dueDate = request.body.jsonObject.dueDate
    var newTask = {
        Task: task,
        Current_date: curDate,
        Due_date: dueDate
    }
    const jsonString = JSON.stringify(newTask)

    // Appending new task item to JSON file
    var data = fs.readFileSync('database.json');
    var json = JSON.parse(data);
    json.push(newTask);
    fs.writeFile("database.json", JSON.stringify(json), function(err, result) {
        if (err) { console.log('error', err) }
        else { console.log('Successfully wrote to file') }
    });
    response.send(200)
}