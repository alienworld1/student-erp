import prisma from './prisma';

// if the attendance record doesn't exist - creates it
// if it does exist, it is updated with the provided status
async function markAttendance(
  studentId: string,
  date: Date,
  period: number,
  status: boolean = true,
) {
  const attendance = await prisma.attendance.findFirst({
    where: {
      student_id: studentId,
      date,
      period,
    },
  });

  if (!attendance) {
    await prisma.attendance.create({
      data: {
        student: { connect: { id: studentId } },
        date,
        period,
        status,
      },
    });
  } else {
    await prisma.attendance.update({
      where: {
        id: attendance.id,
      },
      data: {
        status,
      },
    });
  }
}

async function getAttendanceByStudentID(studentId: string) {
  const attendanceRecords = await prisma.attendance.findMany({
    where: {
      student_id: studentId,
    },
  });
  return attendanceRecords;
}

export { markAttendance, getAttendanceByStudentID };
