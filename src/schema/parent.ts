import * as z from 'zod/v4';
import prisma from '../utils/prisma';

const Parent = z.object({
  studentid: z
    .string()
    .min(0, 'Student ID is required')
    .refine(
      async value => {
        const student = await prisma.student.findUnique({
          where: { id: value },
        });
        if (student) {
          if (student.parentId) {
            return false; // Student already has a parent
          }
          return true; // Student does not have a parent
        }
        return false; // Student not found
      },
      { error: 'Student not found or already has a parent' },
    ),

  password: z.string().min(8, 'Password must be at least 8 characters long'),
  fatherName: z.string().min(1, "Father's name is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  fatherIncome: z.number().min(0, 'Annual income must be at least 0'),
  motherIncome: z.number().min(0, 'Annual income must be at least 0'),
  parentEmail: z.email('Invalid parent email format'),
  parentMobileNumber: z
    .string()
    .min(10, 'Parent mobile number must be at least 10 characters long')
    .max(15, 'Parent mobile number must be at most 15 characters long'),
});

export type ParentType = z.infer<typeof Parent>;
export { Parent as ParentSchema };
