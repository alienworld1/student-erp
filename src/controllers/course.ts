import asyncHandler from 'express-async-handler';
import prisma from '../utils/prisma';
import * as bcrypt from 'bcrypt';

import { CourseSchema } from '../schema/course';
import { fetchCourseByCode } from '../utils/courses';

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

  const existingCourse = await fetchCourseByCode(course.data.coursecode);

  if (existingCourse) {
    res.status(400).json({ message: 'Course code already exists' });
    return;
  }

  const newCourse = await prisma.courses.create({
    data: {
      code: course.data.coursecode,
      name: course.data.coursename,
      semester: course.data.semester,
      credits: course.data.credits,
    },
  });

  res.status(201).json(newCourse);
});
