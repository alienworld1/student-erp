/*
  Warnings:

  - Changed the type of `accomodationStatus` on the `student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `applicationMode` on the `student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `enrollmentMode` on the `student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "student" DROP COLUMN "accomodationStatus",
ADD COLUMN     "accomodationStatus" TEXT NOT NULL,
DROP COLUMN "applicationMode",
ADD COLUMN     "applicationMode" TEXT NOT NULL,
DROP COLUMN "enrollmentMode",
ADD COLUMN     "enrollmentMode" TEXT NOT NULL;

-- DropEnum
DROP TYPE "AccommodationStatus";

-- DropEnum
DROP TYPE "ApplicationMode";

-- DropEnum
DROP TYPE "EnrollmentType";
