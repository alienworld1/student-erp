import { Router, Request, Response } from 'express';
import studentRouter from './students';

const router = Router();

router.use('/students', studentRouter);

router.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Welcome to Student ERP API',
    status: 'Server is running successfully!',
    timestamp: new Date().toISOString(),
  });
});

export default router;
