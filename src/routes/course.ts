import { Router } from "express";
import {
    fetchAllCourses,
    fetchCourseById,
    createCourse
} from '../controllers/course';

const courseRouter = Router();

courseRouter.get('/', fetchAllCourses);
courseRouter.get('/:id', fetchCourseById);
courseRouter.post('/', createCourse);

export default courseRouter;