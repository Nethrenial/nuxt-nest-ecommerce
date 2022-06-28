-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Admin', 'Moderator');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'User';
