import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const quotes = JSON.parse(
  readFileSync(join(__dirname, 'quotes.json'), 'utf-8')
) as Array<{ id: number; quote: string; author: string }>;

const app = express();
app.use(cors());

app.get('/', (_, res) => {
  res.json({
    name: 'Dev Quotes API',
    version: '1.0',
    endpoints: {
      random: 'GET /quote',
      byId: 'GET /quote/:id',
      all: 'GET /quotes',
    },
    repo: 'https://github.com/hussainu6/dev-quotes-api',
  });
});

app.get('/quote', (_, res) => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(q);
});

app.get('/quote/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const q = quotes.find((x) => x.id === id);
  if (!q) return res.status(404).json({ error: 'Quote not found' });
  res.json(q);
});

app.get('/quotes', (_, res) => {
  res.json(quotes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Dev Quotes API on :${PORT}`));
