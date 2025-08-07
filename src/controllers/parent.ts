import asyncHandler from 'express-async-handler';
import prisma from '../utils/prisma';
import * as bcrypt from 'bcrypt';

import { ParentSchema } from '../schema/parent';
import { addParent } from '../services/parent';

export const fetchAllParents = asyncHandler(async (req, res) => {
  const parents = await prisma.parent.findMany();
  res.json(parents);
});

export const fetchParentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const parent = await prisma.parent.findUnique({
    where: { id },
  });

  if (!parent) {
    res.status(404).json({ message: 'Parent not found' });
    return;
  }

  res.json(parent);
});

export const createParent = asyncHandler(async (req, res) => {
  const parent = ParentSchema.safeParse(req.body);

  if (!parent.success) {
    res.status(400).json({ issues: parent.error.issues });
    return;
  }

  const hashedPassword = await bcrypt.hash(parent.data.password, 10);

  const newParent = await prisma.parent.create({
    data: {
      students: {
        connect: { id: parent.data.studentid },
      },
      password: hashedPassword,
      father_name: parent.data.fatherName,
      mother_name: parent.data.motherName,
      father_work: parent.data.fatherOccupation,
      mother_work: parent.data.motherOccupation,
      father_income: parent.data.fatherIncome,
      mother_income: parent.data.motherIncome,
      email: parent.data.parentEmail,
      contact: [parent.data.parentMobileNumber],
    },
  });

  addParent(newParent.id, parent.data.studentid);

  res.status(201).json(newParent);
});
