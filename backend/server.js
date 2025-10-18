const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware أساسي
app.use(cors());
app.use(express.json());

// مسار تجريبي
app.get('/', (req, res) => {
  res.json({ message: 'Güven Akışı Server Çalışıyor! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} adresinde çalışıyor`);
});