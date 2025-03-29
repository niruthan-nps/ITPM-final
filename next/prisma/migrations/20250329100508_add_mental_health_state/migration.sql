-- CreateEnum
CREATE TYPE "MentalHealthState" AS ENUM ('negative', 'positive');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mentalstate" "MentalHealthState" DEFAULT 'positive';
