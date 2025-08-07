import prisma from '../utils/prisma';

export const addParent = async (parentId: string, studentId: string) => {
  const studentExists = await prisma.student.findUnique({
    where: { id: studentId },
  });
  if (!studentExists) {
    throw new Error('Student not found');
  }

  await prisma.student.update({
    where: { id: studentId },
    data: {
      parentId,
    },
  });
};
