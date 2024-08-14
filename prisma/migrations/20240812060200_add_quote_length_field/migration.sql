/*
  Warnings:

  - Added the required column `length` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "length" INTEGER NOT NULL;
