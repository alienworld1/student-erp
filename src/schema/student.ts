import * as z from 'zod/v4';

const smallestRegNumber = 100_000_000_000;
const largestRegNumber = 999_999_999_999;

const Student = z.object({
  name: z.string().min(1, 'Name is required'),
  rollno: z.string().min(1, 'Roll number is required'),
  regno: z.number().gte(smallestRegNumber).lte(largestRegNumber),
  enrollmentMode: z.enum(['Regular', 'Lateral Entry', 'Transfer']),
  applicationMode: z.enum(['Management', 'Counseling']),
  branch: z.string().min(1, 'Branch is required'),
  email: z.email('Invalid email format'),
  mobileNumber: z
    .string()
    .min(10, 'Mobile number must be at least 10 characters long')
    .max(15, 'Mobile number must be at most 15 characters long'),
  dateOfBirth: z.iso.date(),
  totalMarks: z.number().min(0, 'Total marks must be at least 0'),
  overallPercentage: z
    .number()
    .min(0, 'Overall percentage must be at least 0')
    .max(100, 'Overall percentage must be at most 100'),
  cutoffMarks: z
    .number()
    .min(0, 'Cutoff marks must be at least 0')
    .max(200, 'Cutoff marks must be at most 200'),
  dateOfJoining: z.iso.date(),
  accommodationStatus: z.enum(['Day Scholar', 'Hosteller']),
  firstGraduate: z.boolean(),
  state: z.string().min(1, 'State is required'),
  religion: z.string().min(1, 'Religion is required'),
  catholicParish: z.string().default(''),
  isDalitCatholic: z.boolean().default(false),
  community: z.string().min(1, 'Community is required'),
  subCaste: z.string().min(1, 'Sub-caste is required'),
  gender: z.enum(['M', 'F']),
  motherTongue: z.string().min(1, 'Mother tongue is required'),
  nativePlace: z.string().min(1, 'Native place is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  bloodGroup: z.string().min(1, 'Blood group is required'),
  department: z.string().min(1, 'Department is required'),
  batch: z.string().min(1, 'Batch is required'),
  currentYear: z.number().int().min(2000, 'Year must be 2000 or later'),
  semester: z
    .number()
    .int()
    .min(1, 'Semester must be at least 1')
    .max(8, 'Semester must be at most 8'),
  address: z.string().min(1, 'Address is required'),
  coCurricularActivities: z.string().default(''),
  extraCurricularActivities: z.string().default(''),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type StudentType = z.infer<typeof Student>;
export { Student as StudentSchema };
