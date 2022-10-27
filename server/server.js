//Import
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const url =
  "mongodb+srv://vijay:mivPkd7NJDLSKlzw@cluster0.clf64ri.mongodb.net/register?retryWrites=true&w=majority";

//Initializing
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Database

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection success");
  })
  .catch((err) => {
    console.log("error");
  });

//Schema
const Schema = new mongoose.Schema({
  fname: String,
  lname: String,
  username: {
    type: String,
    required: true,
  },
  Password: Number,
  photo: Buffer,
});

const model = new mongoose.model("model", Schema);

//Routes
app.post("/register", (req, res) => {
  const newModel = new model({
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    Password: req.body.Password,
    photo: req.body.photo,
  });
  newModel.save();
  res.send({ message: "registered successfully" });
});

app.post("/login", (req, res) => {
  model.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      res.send({ message: "User not found" });
    } else {
      res.send({ message: "Login successful", user });
    }
  });
});

//Listen
app.listen(8000, () => {
  console.log("listening");
});
