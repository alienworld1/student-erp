import { Router } from 'express';
import {
  fetchAllStudents,
  fetchStudentById,
  createStudent,
  addParent,
} from '../controllers/student';

const studentRouter = Router();

studentRouter.get('/', fetchAllStudents);
studentRouter.get('/:id', fetchStudentById);

// parentId is expected as a query parameter
studentRouter.post('/:id/parent', addParent);

studentRouter.post('/', createStudent);

export default studentRouter;
