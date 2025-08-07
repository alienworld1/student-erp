import * as z from 'zod/v4';

const Parent =z.object({
    studentid: z.number().min(0, 'Student ID is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    fatherName: z.string().min(1, 'Father\'s name is required'),
    motherName: z.string().min(1, 'Mother\'s name is required'),
    fatherOccupation: z.string().min(1, 'Father\'s occupation is required'),
    motherOccupation: z.string().min(1, 'Mother\'s occupation is required'),
    annualIncome: z.number().min(0, 'Annual income must be at least 0'),
    parentEmail: z.email('Invalid parent email format'),
    parentMobileNumber: z
      .string()
      .min(10, 'Parent mobile number must be at least 10 characters long')
      .max(15, 'Parent mobile number must be at most 15 characters long'),
    parentAddress: z.string().min(1, 'Parent address is required'),    
});

export type ParentType = z.infer<typeof Parent>;
export { Parent as ParentSchema};