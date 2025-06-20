/*
  Warnings:

  - You are about to drop the column `accomodationStatus` on the `student` table. All the data in the column will be lost.
  - Added the required column `accommodationStatus` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" DROP COLUMN "accomodationStatus",
ADD COLUMN     "accommodationStatus" TEXT NOT NULL;
