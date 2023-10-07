-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "productname" TEXT NOT NULL,
    "brandname" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_productname_key" ON "product"("productname");
