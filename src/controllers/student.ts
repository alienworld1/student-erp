import asyncHandler from 'express-async-handler';
import prisma from '../utils/prisma';
import * as bcrypt from 'bcrypt';
import * as z from 'zod/v4';

import { StudentSchema } from '../schema/student';

export const fetchAllStudents = asyncHandler(async (req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

export const fetchStudentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const student = await prisma.student.findUnique({
    where: { id },
  });

  if (!student) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }

  res.json(student);
});

export const createStudent = asyncHandler(async (req, res) => {
  const student = StudentSchema.safeParse(req.body);

  if (!student.success) {
    res.status(400).json({ issues: student.error.issues });
    return;
  }

  const hashedPassword = await bcrypt.hash(student.data.password, 10);

  const newStudent = await prisma.student.create({
    data: {
      name: student.data.name,
      rollno: student.data.rollno,
      regno: student.data.regno,
      enrollmentMode: student.data.enrollmentMode,
      applicationMode: student.data.applicationMode,
      branch: student.data.branch,
      email: student.data.email,
      mobileNumber: student.data.mobileNumber,
      dateOfBirth: new Date(student.data.dateOfBirth),
      totalMarks: student.data.totalMarks,
      overallPercentage: student.data.overallPercentage,
      cutoffMarks: student.data.cutoffMarks,
      dateOfJoining: new Date(student.data.dateOfJoining),
      accommodationStatus: student.data.accommodationStatus,
      firstGraduate: student.data.firstGraduate,
      state: student.data.state,
      religion: student.data.religion,
      catholicParish: student.data.catholicParish,
      isDalitCatholic: student.data.isDalitCatholic,
      Community: student.data.community,
      subCaste: student.data.subCaste,
      gender: student.data.gender,
      motherTongue: student.data.motherTongue,
      nativePlace: student.data.nativePlace,
      nationality: student.data.nationality,
      bloodGroup: student.data.bloodGroup,
      department: student.data.department,
      batch: student.data.batch,
      currentYear: student.data.currentYear,
      currentSemester: student.data.semester,
      address: student.data.address,
      coCurricularActivities: [student.data.coCurricularActivities],
      extracurricularActivities: [student.data.extraCurricularActivities],
      password: hashedPassword,
    },
  });

  res.status(201).json(newStudent);
});

export const addParent = asyncHandler(async (req, res) => {
  const parentId = req.query.parentId;
  const studentId = req.params.id;

  if (!parentId || typeof parentId !== 'string') {
    res
      .status(400)
      .json({ message: 'Parent ID is required as query parameter' });
    return;
  }

  const studentExists = await prisma.student.findUnique({
    where: { id: studentId },
  });

  if (!studentExists) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }

  await prisma.student.update({
    where: { id: studentId },
    data: {
      parentId,
    },
  });

  res.status(201).json({ message: 'Parent added successfully' });
});
