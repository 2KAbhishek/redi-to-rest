import express from 'express';
import 'dotenv/config';
import path from 'path';
import { Client, Repository } from 'redis-om';
import { noteSchema } from './schema/note.schema.js';

const app = express();
app.use(express.json());

const client = new Client();
await client.open(process.env.REDIS_URL, console.log('redis connected'));

const noteRepository = new Repository(noteSchema, client);

app.get('/', async (req, res) => {
  res.send('redi-to-rest says hi!\n');
});

app.get('/notes', async (req, res) => {
  res.send(await noteRepository.search().returnAll());
});

app.post('/notes', async (req, res) => {
  const note = noteRepository.createEntity();

  note.name = req.body.name;
  note.complete = false;
  note.id = await noteRepository.save(note);

  res.send(note);
});

app.put('/notes/:id', async (req, res) => {
  const note = await noteRepository.fetch(req.params.id);

  note.complete = req.body.complete;
  await noteRepository.save(note);

  res.send(note);
});

app.delete('/notes/:id', async (req, res) => {
  await noteRepository.remove(req.params.id);
  res.send(null);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: "lol"});
});

app.listen(process.env.PORT || 8000, () => {
  console.log("redi-to-rest is running!");
});
