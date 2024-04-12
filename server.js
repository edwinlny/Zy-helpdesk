import express from 'express';
import ViteExpress from 'vite-express';
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

ViteExpress.listen(app, PORT, () =>
  console.log(`Server listening on port: ${PORT}...`)
);

