import express from 'express';
import erroHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de rotas
app.use(usersRoute);
app.use(statusRoute);

// Configuração dos Handlers de Erro
app.use(erroHandler)

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Aplicação executando a porta 3000')
});