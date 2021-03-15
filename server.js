require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const { MongoClient, ObjectId, MongoError } = require("mongodb");

//connects to mongoDB
mongoose.connect("mongodb://localhost:27017/til", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const tilDB = mongoose.connection;
tilDB.on("error", console.error.bind(console, "connection error:"));
//Journal schema for entries made through home page
const journalSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  tags: Array,
  date: String,
});
//Allows server to access
const JournalModel = mongoose.model("entries", journalSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/public"));
//api endpoint routes
//Allows user to post new entries on Home Page
app.post("/api", (req, res) => {
  const newContent = new JournalModel({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    tags: req.body.tags,
    date: new Date(),
  });

  newContent.save(function (err) {
    if (err) throw err;
  });
  res.redirect("/facts");
});
//Lists all entries on Facts page
app.get("/api", async (req, res) => {
  const cursor = await JournalModel.find({});
  let results = [];
  await cursor.forEach((entry) => {
    results.push(entry);
  });
  res.json(results);
});

//Displays specific entries that match the search criteria 
app.get('/searchs/', express.urlencoded(), async (req, res) => {
  let setSearch = req.query.searchType;
  let setValue = req.query.searchValue;
  const searchCursor = await JournalModel.find({ [setSearch]: setValue });
  //not sure if this is necessary for the entries to display on front end but it is for all entries to display on facts page
  let searchResults = [];
  await searchCursor.forEach((entry) => {
    searchResults.push(entry);
  });
  res.json(searchResults);
});

//Displays single entry on the entry page
app.get(`/api/:id`, express.urlencoded(), async (req, res) => {
  let result = await JournalModel.findOne({ _id: ObjectId(req.params.id) });

  res.json(result);
});
//Allows user to edit an entry from entry page
app.post("/api/:id", express.urlencoded(), async (req, res) => {
  let setObj = { $set: req.body };
  const editContent = await JournalModel.updateOne(
    { _id: ObjectId(req.params.id) },
    setObj
  );

  res.redirect("/");
});
//Allows user to delete an entry from entry page
app.post("/delete/:id", express.urlencoded(), async (req, res) => {
  await JournalModel.deleteOne({ _id: ObjectId(req.params.id) });

  res.redirect("/");
});
//Displays a message in the terminal informing host which port back end is running on
app.listen(port, () => {
  console.log("Listening on port", port);
});
