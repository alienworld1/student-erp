/*
  Warnings:

  - Added the required column `dateOfJoining` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mode` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modeOfAdmission` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentType` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AdmissionMode" AS ENUM ('Management', 'Counseling');

-- CreateEnum
CREATE TYPE "StudentType" AS ENUM ('Hostel', 'DayScholar');

-- CreateEnum
CREATE TYPE "StudentMode" AS ENUM ('Regular', 'LateralEntry', 'Transfer');

-- AlterTable
ALTER TABLE "student" ADD COLUMN     "bloodGroup" TEXT,
ADD COLUMN     "dateOfJoining" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "mode" "StudentMode" NOT NULL,
ADD COLUMN     "modeOfAdmission" "AdmissionMode" NOT NULL,
ADD COLUMN     "motherTongue" TEXT,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "nativePlace" TEXT,
ADD COLUMN     "studentType" "StudentType" NOT NULL;
