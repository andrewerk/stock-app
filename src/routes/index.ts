import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import loginRoute from './loginRoute';
import userRouter from './userRoutes';
import accountRoutes from './accountRoutes';
import validateToken from '../middlewares/auth.middleware';
import stocksRoutes from './stocksRoutes';
import tradeRoutes from './tradeRoutes';
import portfolioRoute from './portfolioRoutes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRoute);
routes.use('/account', validateToken, accountRoutes);
routes.use('/stocks', validateToken, stocksRoutes);
routes.use('/investments', validateToken, tradeRoutes);
routes.use('/assets', validateToken, portfolioRoute);
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(require('../../swagger.json')));

export default routes;
