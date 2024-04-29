import express from "express";
import { UserController } from "./controllers/UserController";
const app = express();
const port = process.env.PORT || 3000;

// JSON parser
app.use(express.json());

// User Register
app.post("/register", UserController.register);

// User Login
app.post("/login", (req, res) => {
  res.send("Hello World!");
});

// GET all phones
app.get("/phone", (req, res) => {
  res.send("Hello World!");
});

// GET phone by ID
app.get("/phone/:phoneId", (req, res) => {
  res.send("Hello World!");
});

// Input Phone to Database
app.post("/phone", (req, res) => {
  res.send("Hello World!");
});

// Update phone by ID
app.put("/phone/:phoneId", (req, res) => {
  res.send("Hello World!");
});

// Delete phone by ID
app.delete("/phone/:phoneId", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Mobile Store App listening on port ${port}`);
});
