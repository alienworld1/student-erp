import * as z from 'zod/v4';

const Attendance = z.object({
  studentId: z.string().min(1, 'Student ID is required'),

  // true - present, false - absent
  status: z.boolean(),
  date: z.date().max(new Date(), 'Date cannot be in the future'),
  period: z
    .int()
    .min(1, 'Period must be at least 1')
    .max(8, 'Period must be at most 8'),
});

export type AttendanceType = z.infer<typeof Attendance>;
export { Attendance as AttendanceSchema };
