import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running");
});

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// Put = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação
