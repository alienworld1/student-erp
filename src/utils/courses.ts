import prisma from './prisma';
import { Courses } from '@prisma/client';

export const fetchCourseByCode = async (
  courseCode: string,
): Promise<Courses | null> => {
  const course = await prisma.courses.findUnique({
    where: { code: courseCode },
  });
  return course;
};
