-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Card', 'CashOnDelivery');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SuperAdmin';

-- CreateTable
CREATE TABLE "ShopOpenRequest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "coverPhoto" TEXT NOT NULL,
    "logo" TEXT,
    "businessDocuments" TEXT[],
    "isVerifiedBusiness" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip" TEXT NOT NULL,

    CONSTRAINT "ShopOpenRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopOpenRequest_name_key" ON "ShopOpenRequest"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ShopOpenRequest_contactEmail_key" ON "ShopOpenRequest"("contactEmail");

-- CreateIndex
CREATE UNIQUE INDEX "ShopOpenRequest_contactPhone_key" ON "ShopOpenRequest"("contactPhone");

-- AddForeignKey
ALTER TABLE "ShopOpenRequest" ADD CONSTRAINT "ShopOpenRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
