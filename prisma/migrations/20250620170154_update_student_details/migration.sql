/*
  Warnings:

  - You are about to drop the column `dept` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `mode` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `modeOfAdmission` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `semester` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `studentType` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `student` table. All the data in the column will be lost.
  - Added the required column `Community` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accomodationStatus` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `applicationMode` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branch` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentSemester` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentYear` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cutoffMarks` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enrollmentMode` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstGraduate` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDalitCatholic` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overallPercentage` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `religion` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCaste` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMarks` to the `student` table without a default value. This is not possible if the table is not empty.
  - Made the column `bloodGroup` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `motherTongue` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nationality` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nativePlace` on table `student` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "ApplicationMode" AS ENUM ('Management', 'Counseling');

-- CreateEnum
CREATE TYPE "EnrollmentType" AS ENUM ('Regular', 'LateralEntry', 'Transfer');

-- CreateEnum
CREATE TYPE "AccommodationStatus" AS ENUM ('Hostel', 'DayScholar');

-- AlterTable
ALTER TABLE "student" DROP COLUMN "dept",
DROP COLUMN "dob",
DROP COLUMN "mode",
DROP COLUMN "modeOfAdmission",
DROP COLUMN "semester",
DROP COLUMN "studentType",
DROP COLUMN "year",
ADD COLUMN     "Community" TEXT NOT NULL,
ADD COLUMN     "accomodationStatus" "AccommodationStatus" NOT NULL,
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "applicationMode" "ApplicationMode" NOT NULL,
ADD COLUMN     "branch" TEXT NOT NULL,
ADD COLUMN     "catholicParish" TEXT,
ADD COLUMN     "coCurricularActivities" TEXT[],
ADD COLUMN     "currentSemester" INTEGER NOT NULL,
ADD COLUMN     "currentYear" INTEGER NOT NULL,
ADD COLUMN     "cutoffMarks" INTEGER NOT NULL,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "enrollmentMode" "EnrollmentType" NOT NULL,
ADD COLUMN     "extracurricularActivities" TEXT[],
ADD COLUMN     "firstGraduate" BOOLEAN NOT NULL,
ADD COLUMN     "isDalitCatholic" BOOLEAN NOT NULL,
ADD COLUMN     "mobileNumber" TEXT NOT NULL,
ADD COLUMN     "overallPercentage" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "photoUrl" TEXT,
ADD COLUMN     "religion" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "subCaste" TEXT NOT NULL,
ADD COLUMN     "totalMarks" INTEGER NOT NULL,
ALTER COLUMN "bloodGroup" SET NOT NULL,
ALTER COLUMN "motherTongue" SET NOT NULL,
ALTER COLUMN "nationality" SET NOT NULL,
ALTER COLUMN "nativePlace" SET NOT NULL;

-- DropEnum
DROP TYPE "AdmissionMode";

-- DropEnum
DROP TYPE "StudentMode";

-- DropEnum
DROP TYPE "StudentType";
