/*
  Warnings:

  - Added the required column `title` to the `Text` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Text" ADD COLUMN     "title" TEXT NOT NULL;
