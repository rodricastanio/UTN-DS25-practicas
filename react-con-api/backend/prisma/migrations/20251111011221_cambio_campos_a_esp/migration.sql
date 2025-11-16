/*
  Warnings:

  - You are about to drop the column `author` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `autor` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autorId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contenido` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "author",
DROP COLUMN "price",
DROP COLUMN "title",
ADD COLUMN     "autor" TEXT NOT NULL,
ADD COLUMN     "precio" INTEGER NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "autorId" INTEGER NOT NULL,
ADD COLUMN     "contenido" TEXT NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
