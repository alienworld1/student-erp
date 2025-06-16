import prisma from "../utils/prisma";
import asyncHandler from 'express-async-handler';

export const fetchAllStudents = asyncHandler(async (req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});