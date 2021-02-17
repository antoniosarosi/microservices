
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const db = process.env.MONGO_URL;
mongoose.connect(db);
mongoose.connection.once('open', () => console.log('Db connected'));

const Todo = mongoose.model('Todo', new mongoose.Schema({
  todo: {
    type: String,
  },
  completed: {
    type: Boolean,
  }
}));

app.post('/todos', async (req, res) => {
  const { todo, completed } = req.body;
  try {
    await new Todo({ todo, completed }).save();
    res.json({ message: 'Todo created' });
  } catch (e) {
    console.log(e);
  }
});

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
})

app.listen(port, () => console.log('App running on', port));
