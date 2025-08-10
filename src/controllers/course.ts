import asyncHandler from 'express-async-handler';
import prisma from '../utils/prisma';
import * as bcrypt from 'bcrypt';

import { CourseSchema } from '../schema/course';
import { addCourse } from '../services/course';

export const fetchAllCourses = asyncHandler(async (req, res) => {
  const courses = await prisma.courses.findMany();
  res.json(courses);
});

export const fetchCourseById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const course = await prisma.courses.findUnique({
    where: { id },
  });

  if (!course) {
    res.status(404).json({ message: 'Course not found' });
    return;
  }

  res.json(course);
});

export const createCourse = asyncHandler(async (req, res) => {
    const course = CourseSchema.safeParse(req.body);

    if (!course.success) {
        res.status(400).json({ issues: course.error.issues });
        return;
    }
    const newCourse = await prisma.courses.create({
        data: {
            id: String(course.data.courseid),
            name: course.data.coursename,
            code: course.data.coursecode,
            semester: course.data.semester,
            credits: course.data.credits,
        },
    });

    addCourse(Number(newCourse.id), course.data.courseid);

    res.status(201).json(newCourse);
})