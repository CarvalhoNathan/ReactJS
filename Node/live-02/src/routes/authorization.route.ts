import { NextFunction, Response, Request, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repostirories/user.repository";
import JWT from 'jsonwebtoken';

const authorizationRouter = Router();

authorizationRouter.post('/token', async (req: Request, res: Response, next: NextFunction,) => {
  try {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      throw new ForbiddenError('Credenciais não informadas');
    }

    // Basic YWRtaW46QURNSU4

    const [authenticationType, token] = authorizationHeader.split(' ');

    if(authenticationType !== 'Basic' || !token) {
      throw new ForbiddenError('Tipo de authenticação inválido');
    }

    const tokenContent = Buffer.from(token, 'base64').toString('utf-8')
    
    const [username, password] = tokenContent.split(':');

    if(!username || !password) {
      throw new ForbiddenError('Credenciais não preenchidas');
    }
    
    const user = await userRepository.findByUsernameAndPassword(username, password);
    console.log(user);

    // "iss" O domínio da aplicação geradora do token
    // "sub" É o assunto do token, mas é muito utilizado para guarda o ID do usuário
    // "aud" Define quem pode usar o token
    // "exp" Data para expiração do token
    // "nbf" Define uma data para qual o token não pode ser aceito antes dela
    // "iat" Data de criação do token
    // "jti" O id do token

  } catch (error) {
   next(error); 
  }
});

export default authorizationRouter;