-- CreateTable
CREATE TABLE "student" (
    "student_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "rollno" TEXT NOT NULL,
    "regno" INTEGER NOT NULL,
    "dept" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "student_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "parent" (
    "parent_id" TEXT NOT NULL,
    "father_name" TEXT NOT NULL,
    "mother_name" TEXT NOT NULL,
    "father_work" TEXT NOT NULL,
    "mother_work" TEXT NOT NULL,
    "father_income" INTEGER NOT NULL,
    "mother_income" INTEGER NOT NULL,
    "contact" TEXT[],
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "parent_pkey" PRIMARY KEY ("parent_id")
);

-- CreateTable
CREATE TABLE "staff" (
    "staff_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("staff_id")
);

-- CreateTable
CREATE TABLE "assignments" (
    "assign_id" TEXT NOT NULL,
    "staff_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "dept" TEXT NOT NULL,

    CONSTRAINT "assignments_pkey" PRIMARY KEY ("assign_id")
);

-- CreateTable
CREATE TABLE "courses" (
    "course_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "credits" INTEGER NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "attendance" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "period" INTEGER NOT NULL,
    "coursesId" TEXT,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announcements" (
    "id" TEXT NOT NULL,
    "staff_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "upload" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "staff_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "marks" JSONB NOT NULL,

    CONSTRAINT "upload_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_rollno_key" ON "student"("rollno");

-- CreateIndex
CREATE UNIQUE INDEX "student_regno_key" ON "student"("regno");

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "parent_email_key" ON "parent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "staff_email_key" ON "staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "assignments_staff_id_course_id_batch_dept_key" ON "assignments"("staff_id", "course_id", "batch", "dept");

-- CreateIndex
CREATE UNIQUE INDEX "courses_code_key" ON "courses"("code");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_student_id_date_period_key" ON "attendance"("student_id", "date", "period");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parent"("parent_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("staff_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "courses"("course_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("staff_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "upload" ADD CONSTRAINT "upload_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "upload" ADD CONSTRAINT "upload_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("staff_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "upload" ADD CONSTRAINT "upload_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;
