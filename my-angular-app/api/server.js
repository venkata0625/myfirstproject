const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);
  res.json(newItem);
});

app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter(item => item.id !== itemId);
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log('API server is listening on port 3001');
});

