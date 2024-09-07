-- DropIndex
DROP INDEX `Product_name_key` ON `Product`;

-- AlterTable
ALTER TABLE `Product` ALTER COLUMN `price` DROP DEFAULT;
