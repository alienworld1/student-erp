/*
  Warnings:

  - The values [DayScholar] on the enum `AccommodationStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [LateralEntry] on the enum `EnrollmentType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AccommodationStatus_new" AS ENUM ('Hostel', 'Day Scholar');
ALTER TABLE "student" ALTER COLUMN "accomodationStatus" TYPE "AccommodationStatus_new" USING ("accomodationStatus"::text::"AccommodationStatus_new");
ALTER TYPE "AccommodationStatus" RENAME TO "AccommodationStatus_old";
ALTER TYPE "AccommodationStatus_new" RENAME TO "AccommodationStatus";
DROP TYPE "AccommodationStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "EnrollmentType_new" AS ENUM ('Regular', 'Lateral Entry', 'Transfer');
ALTER TABLE "student" ALTER COLUMN "enrollmentMode" TYPE "EnrollmentType_new" USING ("enrollmentMode"::text::"EnrollmentType_new");
ALTER TYPE "EnrollmentType" RENAME TO "EnrollmentType_old";
ALTER TYPE "EnrollmentType_new" RENAME TO "EnrollmentType";
DROP TYPE "EnrollmentType_old";
COMMIT;
