/*
  Warnings:

  - The primary key for the `Word` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Word` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Word" DROP CONSTRAINT "Word_pkey",
DROP COLUMN "id";
