import prisma from "../utils/prisma";

export const addCourse = async (courseId: number, courseData: any) => {
  const courseExists = await prisma.courses.findUnique({
    where: { id: courseId.toString() },
  });
  if (!courseExists) {
    throw new Error('Course not found');
  }

  await prisma.courses.update({
    where: { id: courseId.toString() },
    data: {
      ...courseData,
    },
  });
}