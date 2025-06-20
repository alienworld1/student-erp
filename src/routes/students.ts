import { Router } from 'express';
import {
  fetchAllStudents,
  fetchStudentById,
  createStudent,
} from '../controllers/student';

const studentRouter = Router();

studentRouter.get('/', fetchAllStudents);
studentRouter.get('/:id', fetchStudentById);
studentRouter.post('/', createStudent);

export default studentRouter;
