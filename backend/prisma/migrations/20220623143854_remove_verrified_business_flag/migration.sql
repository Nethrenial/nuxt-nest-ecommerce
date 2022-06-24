/*
  Warnings:

  - You are about to drop the column `isVerifiedBusiness` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `isVerifiedBusiness` on the `ShopOpenRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "isVerifiedBusiness";

-- AlterTable
ALTER TABLE "ShopOpenRequest" DROP COLUMN "isVerifiedBusiness";
