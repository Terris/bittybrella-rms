# Migration `20200528094244-add-orders`

This migration has been generated by Terris Kremer at 5/28/2020, 9:42:44 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Order" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"description" text  NOT NULL ,"id" SERIAL,"placed" boolean  NOT NULL ,
    PRIMARY KEY ("id"))

ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'USER';
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200525210752-add-par-to-stock-item..20200528094244-add-orders
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -33,8 +33,15 @@
   products    Product[]
   createdAt   DateTime  @default(now())
 }
+model Order {
+  id          Int       @id @default(autoincrement())
+  description String
+  placed      Boolean
+  createdAt   DateTime  @default(now())
+}
+
 model ProductsOnTickets {
   id          Int       @id @default(autoincrement())
   product     Product   @relation(fields: [productId], references: [id])
   productId   Int
```


