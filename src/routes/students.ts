import { Router } from 'express';
import { fetchAllStudents } from '../controllers/student';

const studentRouter = Router();

studentRouter.get('/', fetchAllStudents);

export default studentRouter;
