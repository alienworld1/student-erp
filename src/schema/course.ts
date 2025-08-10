import * as z from 'zod/v4';

const Course = z.object({
    courseid: z.number().min(1, 'Course ID is required'),
    coursecode: z.string().min(1, 'Course code is required'),
    coursename: z.string().min(1, 'Course name is required'),
    semester: z.number().int().min(1, 'Semester must be at least 1').max(8, 'Semester must be at most 8'),
    credits: z.number().int().min(1, 'Credits must be at least 1').max(6, 'Credits must be at most 6'),
});

export type CourseType = z.infer<typeof Course>;
export { Course as CourseSchema };